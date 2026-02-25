export interface ProjectLink {
    labelEn: string;
    labelCn: string;
    url: string;
    external?: boolean;
}

export interface ProjectCodeBlock {
    filePath: string;
    language: string;
    titleEn: string;
    titleCn: string;
}

export interface Project {
    id: string;
    category: string;
    titleEn: string;
    titleCn: string;
    descEn: string;
    descCn: string;
    detailsEn?: string[];
    detailsCn?: string[];
    techStack: string[];
    vibeCoded: boolean;
    links?: ProjectLink[];
    codeBlock?: ProjectCodeBlock;
}

export const CATEGORIES = [
    { id: "all", labelEn: "All", labelCn: "全部" },
    { id: "mahjong", labelEn: "Mahjong", labelCn: "麻将" },
    { id: "web", labelEn: "Web & Full-Stack", labelCn: "Web 与全栈" },
    { id: "ai", labelEn: "AI & ML", labelCn: "AI 与机器学习" },
    { id: "systems", labelEn: "Systems & Native", labelCn: "系统与原生应用" },
    { id: "research", labelEn: "Research", labelCn: "研究" },
];

export const PROJECTS: Project[] = [
    // ─── Mahjong ───
    {
        id: "riichi-mahjong",
        category: "mahjong",
        titleEn: "Riichi Mahjong Game",
        titleCn: "立直麻将游戏",
        descEn: "Complete single-player Riichi Mahjong with 3 AI opponents. Supports ~25 yaku, ~12 yakuman, hanchan and tonpuusen modes.",
        descCn: "完整的单人立直麻将游戏，支持 3 个 AI 对手。支持约 25 种役、12 种役满，半庄和东风模式。",
        detailsEn: [
            "Full scoring with dora, uradora, and furiten detection",
            "Shanten-reduction AI strategy for realistic opponents",
            "Pure Dart game engine with Flutter UI",
        ],
        detailsCn: [
            "完整计分系统，包括宝牌、里宝牌和振听检测",
            "基于向听数缩减的 AI 策略",
            "纯 Dart 游戏引擎 + Flutter UI",
        ],
        techStack: ["Flutter", "Dart"],
        vibeCoded: true,
        links: [
            { labelEn: "Play Online", labelCn: "在线游玩", url: "https://rehydratedwater.com/mahjong", external: true },
            { labelEn: "GitHub Repo", labelCn: "GitHub 仓库", url: "https://github.com/qizheYang/Mahjong_VibeCoding", external: true },
        ],
        codeBlock: {
            filePath: "/code/sichuan_rules.dart",
            language: "dart",
            titleEn: "Sichuan Mahjong Win Detection & Han Counting",
            titleCn: "四川麻将胡牌检测与番数计算",
        },
    },
    {
        id: "mahjong-recorder",
        category: "mahjong",
        titleEn: "麻雀記録 – Mahjong Recorder",
        titleCn: "麻雀記録 – 麻将记录器",
        descEn: "Real-time web app for recording Riichi Mahjong games with M-League rules. WebSocket multiplayer with room codes.",
        descCn: "用于记录立直麻将对局的实时 Web 应用，支持 M-League 规则。WebSocket 多人房间。",
        detailsEn: [
            "Room-based 4-player games with 4-character codes",
            "Automatic M-League scoring with configurable rules",
            "Player stats, game history, undo support",
        ],
        detailsCn: [
            "基于房间的 4 人游戏，使用 4 位房间码",
            "自动 M-League 计分，规则可配置",
            "选手数据统计、对局历史、撤销支持",
        ],
        techStack: ["React", "TypeScript", "Hono", "SQLite", "WebSocket"],
        vibeCoded: true,
        links: [
            { labelEn: "GitHub Repo", labelCn: "GitHub 仓库", url: "https://github.com/qizheYang/mahjong-recording-eastwind", external: true },
        ],
        codeBlock: {
            filePath: "/code/handler.ts",
            language: "typescript",
            titleEn: "WebSocket Game State Handler",
            titleCn: "WebSocket 游戏状态处理器",
        },
    },
    {
        id: "mahjong-streamer",
        category: "mahjong",
        titleEn: "Mahjong Streamer Overlay",
        titleCn: "麻将直播叠加层",
        descEn: "Real-time OBS overlay system for live streaming Riichi Mahjong. Transparent 1920×1080 overlay with broadcaster control panel.",
        descCn: "用于直播立直麻将的实时 OBS 叠加层系统。透明 1920×1080 叠加层与主播控制面板。",
        detailsEn: [
            "WebSocket real-time sync with OBS",
            "Score management, dora indicators, riichi/tenpai display",
            "Event badges and scrolling marquee",
        ],
        detailsCn: [
            "WebSocket 与 OBS 实时同步",
            "分数管理、宝牌指示、立直/听牌显示",
            "事件徽章与滚动字幕",
        ],
        techStack: ["React", "Vite", "WebSocket"],
        vibeCoded: true,
        links: [],
        codeBlock: {
            filePath: "/code/syncLogic.js",
            language: "javascript",
            titleEn: "OBS Overlay State Synchronization",
            titleCn: "OBS 叠加层状态同步",
        },
    },
    {
        id: "standard-mahjong",
        category: "mahjong",
        titleEn: "Standard Mahjong Tools",
        titleCn: "国标麻将工具集",
        descEn: "Collection of Chinese Standard Mahjong (MCR) and Riichi utilities: scoring calculator, tenpai analysis, and discard coach.",
        descCn: "中国国标麻将 (MCR) 与日麻工具集：计分器、听牌分析、打牌教练。",
        techStack: ["Python"],
        vibeCoded: true,
        links: [],
        codeBlock: {
            filePath: "/code/advisor.py",
            language: "python",
            titleEn: "Smart Discard Advisor with Shanten Calculation",
            titleCn: "基于向听数的智能切牌建议器",
        },
    },

    // ─── Web & Full-Stack ───
    {
        id: "website",
        category: "web",
        titleEn: "This Website (yangqizhe.com)",
        titleCn: "本网站 (yangqizhe.com)",
        descEn: "Personal site built with React, TypeScript, and Vite. Hosted on Digital Ocean with bilingual support.",
        descCn: "使用 React、TypeScript 和 Vite 构建的个人网站。托管在 Digital Ocean 上，支持中英双语。",
        techStack: ["React", "TypeScript", "Vite"],
        vibeCoded: true,
        links: [
            { labelEn: "Live Site", labelCn: "在线访问", url: "https://yangqizhe.com", external: true },
            { labelEn: "GitHub Repo", labelCn: "GitHub 仓库", url: "https://github.com/qizheYang/qizheYang.github.io", external: true },
        ],
    },
    {
        id: "rehydratedwater",
        category: "web",
        titleEn: "rehydratedwater.com",
        titleCn: "rehydratedwater.com",
        descEn: "Gaming portal with a retro-futuristic cyberpunk aesthetic, hosting casual and multiplayer browser games.",
        descCn: "具有复古未来主义赛博朋克风格的游戏门户，托管休闲和多人浏览器游戏。",
        detailsEn: [
            "2048 Magicful Edition, Cidle (Chinese Wordle), A* Pathfinding",
            "Mahjong multiplayer table, Guandan card game",
            "Auto-deployment via GitHub webhooks",
        ],
        detailsCn: [
            "2048 魔法版、Cidle（中文 Wordle）、A* 寻路",
            "麻将多人桌、掼蛋扑克游戏",
            "通过 GitHub Webhook 自动部署",
        ],
        techStack: ["JavaScript", "Flutter", "Nginx"],
        vibeCoded: true,
        links: [
            { labelEn: "GitHub Repo", labelCn: "GitHub 仓库", url: "https://github.com/qizheYang/rehydratedwater.com", external: true },
            { labelEn: "Live Site", labelCn: "在线访问", url: "https://rehydratedwater.com", external: true },
        ],
    },
    {
        id: "streaming-service",
        category: "web",
        titleEn: "Streaming Service",
        titleCn: "直播服务平台",
        descEn: "Self-hosted live streaming platform with RTMP ingestion and HLS playback. C++ backend with Node.js REST API.",
        descCn: "自托管直播平台，支持 RTMP 推流和 HLS 播放。C++ 后端配合 Node.js REST API。",
        detailsEn: [
            "Real-time stream ingestion via RTMP with Nginx-RTMP",
            "HLS playback with auto-detection and stream key auth",
            "Thread-safe stream state management in C++",
        ],
        detailsCn: [
            "通过 Nginx-RTMP 实时推流",
            "HLS 播放，自动检测与推流密钥认证",
            "C++ 线程安全的流状态管理",
        ],
        techStack: ["C++", "Nginx-RTMP", "HLS.js", "Node.js"],
        vibeCoded: true,
        links: [
            { labelEn: "GitHub Repo", labelCn: "GitHub 仓库", url: "https://github.com/qizheYang/StreamingService_VibeCoding", external: true },
        ],
        codeBlock: {
            filePath: "/code/stream_manager.cpp",
            language: "cpp",
            titleEn: "Thread-Safe Stream Manager with HLS Fallback",
            titleCn: "线程安全的流管理器（HLS 回退）",
        },
    },
    {
        id: "travel-planner",
        category: "web",
        titleEn: "Group Travel Planner",
        titleCn: "团队旅行规划器",
        descEn: "Collaborative travel planning web app with React frontend and Java backend. Features live polls and API integrations.",
        descCn: "协作旅行规划 Web 应用，React 前端与 Java 后端。支持实时投票和 API 集成。",
        detailsEn: [
            "Shared workspace for collaborative planning",
            "Live polls, weather/hotel/flight API integration",
            "Authentication and multithreading support",
        ],
        detailsCn: [
            "协作规划共享工作区",
            "实时投票、天气/酒店/航班 API 集成",
            "身份验证与多线程支持",
        ],
        techStack: ["React", "Java", "MySQL"],
        vibeCoded: false,
        links: [
            { labelEn: "GitHub Repo (copy)", labelCn: "GitHub 仓库（副本）", url: "https://github.com/qizheYang/usc_csci201_final_project", external: true },
        ],
        codeBlock: {
            filePath: "/code/APTest.java",
            language: "java",
            titleEn: "JUnit API Test Suite (APITest.java)",
            titleCn: "JUnit API 测试套件 (APITest.java)",
        },
    },

    // ─── AI & ML ───
    {
        id: "shadowwalker",
        category: "ai",
        titleEn: "Shadow Walker – The Huntington",
        titleCn: "Shadow Walker – 亨廷顿",
        descEn: "Interactive shade-aware pathfinding using A* algorithm and computer vision processed maps.",
        descCn: "使用 A* 算法和计算机视觉处理地图的交互式阴凉路径规划应用。",
        detailsEn: [
            "Dynamic A* pathfinding with shade-aware cost function",
            "Shade maps from ShadeMap processed with computer vision",
            "Interactive UI with zoomable map, compass, customizable POIs",
            "Integration with OpenWeatherAPI for real-time weather",
        ],
        detailsCn: [
            "具有阴影感知成本函数的动态 A* 路径规划",
            "阴影地图来自 ShadeMap 并通过计算机视觉处理",
            "交互式界面，支持地图缩放、指南针、可自定义的兴趣点",
            "集成 OpenWeatherAPI 实现实时天气",
        ],
        techStack: ["Python", "Flask", "Computer Vision", "A*"],
        vibeCoded: false,
        links: [
            { labelEn: "GitHub Repo", labelCn: "GitHub 仓库", url: "https://github.com/qizheYang/ShadowWalkerTheHuntington", external: true },
            { labelEn: "Live App", labelCn: "在线体验", url: "https://yangqizhe.com/huntingtonmap", external: true },
        ],
        codeBlock: {
            filePath: "/code/app.py",
            language: "python",
            titleEn: "Flask Backend (app.py)",
            titleCn: "Flask 后端 (app.py)",
        },
    },
    {
        id: "minecraft-ai",
        category: "ai",
        titleEn: "Minecraft AI Command Helper",
        titleCn: "Minecraft AI 命令助手",
        descEn: "Fabric mod that converts natural language to Minecraft commands using GPT-4o. Works on Realms and servers.",
        descCn: "Fabric Mod，使用 GPT-4o 将自然语言转换为 Minecraft 命令。支持领域和服务器。",
        detailsEn: [
            "Natural language → Minecraft command conversion via GPT-4o",
            "Sequential execution with /locate coordinate parsing",
            "Preview before execution, configurable API keys",
        ],
        detailsCn: [
            "通过 GPT-4o 将自然语言转换为 Minecraft 命令",
            "顺序执行，支持 /locate 坐标解析",
            "执行前预览，可配置 API 密钥",
        ],
        techStack: ["Java", "Fabric", "OpenAI API"],
        vibeCoded: true,
        links: [
            { labelEn: "GitHub Repo", labelCn: "GitHub 仓库", url: "https://github.com/qizheYang/Minecraft-AI-Helper", external: true },
        ],
        codeBlock: {
            filePath: "/code/CommandExecutor.java",
            language: "java",
            titleEn: "Sequential Command Executor with Coordinate Parsing",
            titleCn: "带坐标解析的顺序命令执行器",
        },
    },
    {
        id: "handwriting-ml",
        category: "ai",
        titleEn: "Handwriting Machine Learning",
        titleCn: "手写体机器学习",
        descEn: "AI model for converting typed text to personalized handwriting images. Web app for collecting handwriting samples.",
        descCn: "将打字文本转换为个性化手写体图像的 AI 模型。用于收集手写样本的 Web 应用。",
        techStack: ["TypeScript", "Python", "Flask"],
        vibeCoded: true,
        links: [],
    },

    // ─── Systems & Native ───
    {
        id: "battery-monitor",
        category: "systems",
        titleEn: "BatteryMonitor",
        titleCn: "BatteryMonitor 电池监控",
        descEn: "macOS menu bar app for real-time power and battery monitoring on Apple Silicon Macs. Uses IOKit for component-level breakdown.",
        descCn: "macOS 菜单栏应用，用于 Apple Silicon Mac 的实时功耗与电池监控。使用 IOKit 进行组件级分析。",
        detailsEn: [
            "Live power gauge with CPU, GPU, Neural Engine, DRAM breakdown",
            "Per-app energy usage and temperature monitoring",
            "Power flow charts, session stats, CSV export",
        ],
        detailsCn: [
            "实时功耗仪表，分解 CPU、GPU、神经引擎、内存",
            "逐应用能耗与温度监控",
            "功耗流图、会话统计、CSV 导出",
        ],
        techStack: ["SwiftUI", "IOKit", "Swift Charts"],
        vibeCoded: true,
        links: [
            { labelEn: "GitHub Repo", labelCn: "GitHub 仓库", url: "https://github.com/qizheYang/macOS_Battery_Audience", external: true },
        ],
        codeBlock: {
            filePath: "/code/IOReportService.swift",
            language: "swift",
            titleEn: "Dynamic IOKit Power Breakdown via dlopen",
            titleCn: "通过 dlopen 动态加载 IOKit 功耗分析",
        },
    },
    {
        id: "formula-e",
        category: "systems",
        titleEn: "USC Formula E",
        titleCn: "USC 电动方程式车队",
        descEn: "Designed and coded the full dashboard interface for the USC Formula Electric race car using Arduino C++.",
        descCn: "使用 Arduino C++ 为 USC 电动方程式赛车设计并编写完整的仪表盘界面。",
        detailsEn: [
            "Full dashboard interface in Arduino C++",
            "GEVCU code debugging and maintenance",
            "CAN bus and motor cooling system testing",
        ],
        detailsCn: [
            "Arduino C++ 完整仪表盘界面",
            "GEVCU 代码调试与维护",
            "CAN 总线与电机冷却系统测试",
        ],
        techStack: ["Arduino C++", "Teensy", "CAN Bus"],
        vibeCoded: false,
        links: [
            { labelEn: "Dashboard Repo", labelCn: "仪表盘仓库", url: "https://github.com/SCFormulaElectric/dashboard_2024-2025", external: true },
            { labelEn: "GEVCU Repo", labelCn: "GEVCU 仓库", url: "https://github.com/SCFormulaElectric/gevcu-2024-2025", external: true },
        ],
        codeBlock: {
            filePath: "/code/dashboard.ino",
            language: "cpp",
            titleEn: "Arduino/Teensy Dashboard Code",
            titleCn: "Arduino/Teensy 仪表盘代码",
        },
    },

    // ─── Research ───
    {
        id: "latin-chinese",
        category: "research",
        titleEn: "Latin–Chinese Translation",
        titleCn: "拉丁文–中文翻译",
        descEn: "Translated Martino Martini's \"On Friendship\" (逑友篇) from Classical Chinese to modern English with USC professors.",
        descCn: "与南加大教授合作，将卫匡国的《逑友篇》从古典中文翻译成现代英文。",
        techStack: ["Classical Chinese", "Latin", "English"],
        vibeCoded: false,
        links: [
            { labelEn: "Official Website", labelCn: "官方网站", url: "https://charm.havencreative.org/chinese-latin-translation/", external: true },
        ],
        codeBlock: {
            filePath: "/code/translate.txt",
            language: "markdown",
            titleEn: "Translation Excerpt",
            titleCn: "翻译节选",
        },
    },
    {
        id: "bristled-fly",
        category: "research",
        titleEn: "Bristled Wings Robotic Fly",
        titleCn: "刷毛翼机器蝇",
        descEn: "Early-stage robotics project designing a robotic insect using bristled wings instead of membranes. Planned: CV and ML-based automatic routing.",
        descCn: "早期机器人项目，设计使用刷毛翼而非薄膜翼的机器昆虫。计划功能：计算机视觉和基于 ML 的自动路线规划。",
        techStack: ["Robotics", "Computer Vision", "ML"],
        vibeCoded: false,
        links: [],
    },
    {
        id: "pfas",
        category: "research",
        titleEn: "PFAS Research",
        titleCn: "PFAS 研究",
        descEn: "Research on PFAS removal from water and air with Dr. Massoud Pirbazari at USC Viterbi SWAN Lab.",
        descCn: "与南加大维特比 SWAN 实验室的 Pirbazari 博士合作研究从水和空气中去除 PFAS 的方法。",
        techStack: ["Environmental Engineering"],
        vibeCoded: false,
        links: [
            { labelEn: "Final Report", labelCn: "最终报告", url: "/pdf_files/swan_pfas.pdf", external: true },
            { labelEn: "SWAN Lab", labelCn: "SWAN 实验室", url: "https://cee.usc.edu/research/water-quality-research-group/swan/", external: true },
        ],
    },
];
