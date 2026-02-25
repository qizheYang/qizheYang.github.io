import Foundation

/// Reads per-component energy data from Apple's IOReport framework.
/// Uses dlopen/dlsym for dynamic loading — no bridging header needed.
final class IOReportService {
    private typealias CopyChannelsType = @convention(c) (
        CFString, CFString?, UInt64, UInt64, UInt64) -> Unmanaged<CFDictionary>?
    private typealias CreateSubType = @convention(c) (
        UnsafeMutableRawPointer?, CFMutableDictionary,
        UnsafeMutablePointer<Unmanaged<CFMutableDictionary>?>, UInt64, CFTypeRef?
    ) -> UnsafeMutableRawPointer?
    private typealias CreateSamplesType = @convention(c) (
        UnsafeMutableRawPointer, CFMutableDictionary, CFTypeRef?) -> Unmanaged<CFDictionary>?
    private typealias CreateDeltaType = @convention(c) (
        CFDictionary, CFDictionary, CFTypeRef?) -> Unmanaged<CFDictionary>?
    private typealias GetIntType = @convention(c) (CFDictionary, Int32) -> Int64
    private typealias GetNameType = @convention(c) (CFDictionary) -> Unmanaged<CFString>?
    private typealias IterateType = @convention(c) (
        CFDictionary, @convention(block) (CFDictionary) -> Void) -> Void

    private let _copyChannels: CopyChannelsType?
    private let _createSub: CreateSubType?
    private let _createSamples: CreateSamplesType?
    private let _createDelta: CreateDeltaType?
    private let _getInt: GetIntType?
    private let _getName: GetNameType?
    private let _iterate: IterateType?

    private var subscription: UnsafeMutableRawPointer?
    private var subscribedChannels: CFMutableDictionary?
    private var previousSample: CFDictionary?

    init() {
        let lib = dlopen("/usr/lib/libIOReport.dylib", RTLD_NOW)
        func sym<T>(_ name: String) -> T? {
            guard let lib, let p = dlsym(lib, name) else { return nil }
            return unsafeBitCast(p, to: T.self)
        }
        _copyChannels  = sym("IOReportCopyChannelsInGroup")
        _createSub     = sym("IOReportCreateSubscription")
        _createSamples = sym("IOReportCreateSamples")
        _createDelta   = sym("IOReportCreateSamplesDelta")
        _getInt        = sym("IOReportSimpleGetIntegerValue")
        _getName       = sym("IOReportChannelGetChannelName")
        _iterate       = sym("IOReportIterate")
        setupSubscription()
    }

    /// Takes an IOReport sample and returns component power breakdown.
    func sample(totalSystemWatts: Double) -> ComponentPower? {
        guard let sub = subscription, let channels = subscribedChannels,
              let createSamples = _createSamples, let createDelta = _createDelta,
              let getInt = _getInt, let getName = _getName, let iterate = _iterate,
              let sampleRef = createSamples(sub, channels, nil) else { return nil }

        let current = sampleRef.takeRetainedValue()
        let prev = previousSample
        previousSample = current
        guard let prev, let deltaRef = createDelta(prev, current, nil) else { return nil }

        var energyMap: [String: Int64] = [:]
        iterate(deltaRef.takeRetainedValue()) { ch in
            if let nameRef = getName(ch) {
                let name = nameRef.takeUnretainedValue() as String
                let value = getInt(ch, 0)
                if value > 0 { energyMap[name, default: 0] += value }
            }
        }

        // Distribute system power proportionally across components
        let cpuE = Double(energyMap["CPU Energy"] ?? 0)
        let gpuE = Double((energyMap["GPU0"] ?? 0) + (energyMap["GPU SRAM0"] ?? 0))
        let aneE = Double(energyMap["ANE0"] ?? 0)
        let dramE = Double((energyMap["DRAM0"] ?? 0) + (energyMap["DCS0"] ?? 0))
        let known = cpuE + gpuE + aneE + dramE
        guard known > 0 else { return nil }

        let total = abs(totalSystemWatts)
        return ComponentPower(
            cpu: total * cpuE/known, gpu: total * gpuE/known,
            ane: total * aneE/known, dram: total * dramE/known,
            other: max(total - total * (cpuE+gpuE+aneE+dramE)/known, 0), total: total)
    }
}
