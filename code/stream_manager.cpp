#include "core/stream_manager.h"
#include "utils/logger.h"
#include <algorithm>

namespace fs = std::filesystem;

StreamManager::StreamManager(const std::string& hls_path) : hls_path_(hls_path) {
    if (!fs::exists(hls_path_)) Logger::warn("HLS path does not exist: " + hls_path_);
}

void StreamManager::on_publish(const std::string& stream_name) {
    std::lock_guard<std::mutex> lock(mutex_);
    auto& info = streams_[stream_name];
    info.name = stream_name;
    info.live = true;
    info.started_at = std::chrono::system_clock::now();
    info.viewer_estimate = 0;
    Logger::info("Stream started: " + stream_name);
}

void StreamManager::on_publish_done(const std::string& stream_name) {
    std::lock_guard<std::mutex> lock(mutex_);
    auto it = streams_.find(stream_name);
    if (it != streams_.end()) { it->second.live = false; }
}

bool StreamManager::is_live(const std::string& stream_name) const {
    std::lock_guard<std::mutex> lock(mutex_);
    auto it = streams_.find(stream_name);
    if (it != streams_.end() && it->second.live) return true;
    return hls_files_exist(stream_name);  // Fallback: check HLS files
}

std::vector<StreamInfo> StreamManager::get_all_streams() const {
    std::lock_guard<std::mutex> lock(mutex_);
    std::vector<StreamInfo> result;
    result.reserve(streams_.size());
    for (const auto& [name, info] : streams_) result.push_back(info);
    return result;
}

void StreamManager::scan_hls_directory() {
    std::lock_guard<std::mutex> lock(mutex_);
    if (!fs::exists(hls_path_)) return;

    for (const auto& entry : fs::directory_iterator(hls_path_)) {
        if (entry.path().extension() == ".m3u8") {
            std::string name = entry.path().stem().string();
            auto last_write = fs::last_write_time(entry);
            auto now = fs::file_time_type::clock::now();
            auto age = std::chrono::duration_cast<std::chrono::seconds>(now - last_write);
            bool recently_active = age.count() < 30;

            auto it = streams_.find(name);
            if (it == streams_.end()) {
                StreamInfo info;
                info.name = name; info.live = recently_active;
                if (recently_active) info.started_at = std::chrono::system_clock::now();
                streams_[name] = info;
            } else if (recently_active && !it->second.live) {
                it->second.live = true;
                it->second.started_at = std::chrono::system_clock::now();
            } else if (!recently_active && it->second.live) {
                it->second.live = false;
            }
        }
    }
}

bool StreamManager::hls_files_exist(const std::string& stream_name) const {
    auto m3u8_path = fs::path(hls_path_) / (stream_name + ".m3u8");
    if (!fs::exists(m3u8_path)) return false;
    auto last_write = fs::last_write_time(m3u8_path);
    auto now = fs::file_time_type::clock::now();
    auto age = std::chrono::duration_cast<std::chrono::seconds>(now - last_write);
    return age.count() < 30;
}
