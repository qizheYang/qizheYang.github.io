import React from "react";
import CodeBlock from "../components/CodeBlock";
import { useLanguage } from "../context/LanguageContext";

const Projects: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1>{t("Projects", "项目")}</h1>
            <p>{t("Here are highlights of my work and research.", "以下是我的工作和研究成果展示。")}</p>

            {/* Website */}
            <section id="website">
                <h2>{t("This Website (yangqizhe.com)", "本网站 (yangqizhe.com)")}</h2>
                <p>
                    {t(
                        "A personal site built with React, TypeScript, and Vite.",
                        "使用 React、TypeScript 和 Vite 构建的个人网站。"
                    )} <br/>
                    {t(
                        "Hosted on my own servers of Digital Ocean.",
                        "托管在我自己的 Digital Ocean 服务器上。"
                    )} <br/>
                    {t(
                        "What is not in my CV is here.",
                        "简历中没有的内容都在这里。"
                    )} <br/> <br/>
                    {t(
                        "To view the full source code of this website, please visit",
                        "查看本网站的完整源代码，请访问"
                    )}{" "}
                    <a
                        href="https://github.com/qizheYang/qizheYang.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("the GitHub repository", "GitHub 仓库")}
                    </a> {t(
                        "and choose Legacy branch to view the old code which did not use TypeScript.",
                        "，选择 Legacy 分支可查看未使用 TypeScript 的旧版代码。"
                    )}
                </p>
            </section>

            {/* rehydratedwater.com */}
            <section id="rehydratedwater">
                <h2>rehydratedwater.com</h2>
                <p>
                    {t(
                        "A gaming portal with a retro-futuristic cyberpunk aesthetic, hosting casual and multiplayer games.",
                        "一个具有复古未来主义赛博朋克风格的游戏门户，托管休闲和多人游戏。"
                    )}
                </p>
                <ul>
                    <li>{t(
                        "2048 Magicful Edition – the classic number puzzle with a magical twist",
                        "2048 魔法版 – 带有魔法元素的经典数字益智游戏"
                    )}</li>
                    <li>{t(
                        "Cidle – Chinese Wordle character guessing game",
                        "Cidle – 中文 Wordle 猜字游戏"
                    )}</li>
                    <li>{t(
                        "A* Pathfinding – real-time algorithm visualization",
                        "A* 寻路 – 实时算法可视化"
                    )}</li>
                    <li>{t(
                        "Mahjong – multiplayer virtual mahjong table",
                        "麻将 – 多人虚拟麻将桌"
                    )}</li>
                    <li>{t(
                        "Guandan – multiplayer Chinese poker card game",
                        "掼蛋 – 多人中国扑克牌游戏"
                    )}</li>
                </ul>
                <p>
                    {t("Source:", "源代码：")}{" "}
                    <a
                        href="https://github.com/qizheYang/rehydratedwater.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("GitHub Repo", "GitHub 仓库")}
                    </a>{" "}
                    |{" "}
                    <a
                        href="https://rehydratedwater.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("Live Site", "在线访问")}
                    </a>
                </p>
            </section>

            {/* Project 1 */}
            <section id="shadowwalker">
                <h2>Shadow Walker – {t("The Huntington", "亨廷顿")}</h2>
                <p>
                    {t(
                        "Interactive web application built with Python (Flask), computer vision processed shade maps, and A* pathfinding.",
                        "使用 Python (Flask)、计算机视觉处理的阴影地图和 A* 路径规划算法构建的交互式 Web 应用。"
                    )}
                </p>
                <ul>
                    <li>{t(
                        "Dynamic A* pathfinding with shade-aware cost function",
                        "具有阴影感知成本函数的动态 A* 路径规划"
                    )}</li>
                    <li>
                        {t("Shade maps from", "阴影地图来自")}{" "}
                        <a href="https://shademap.app" target="_blank" rel="noopener noreferrer">
                            ShadeMap
                        </a>{" "}
                        {t("processed with computer vision", "并通过计算机视觉处理")}
                    </li>
                    <li>{t(
                        "Interactive UI with zoomable map, compass, customizable POIs",
                        "交互式界面，支持地图缩放、指南针、可自定义的兴趣点"
                    )}</li>
                    <li>{t(
                        "Integration with OpenWeatherAPI for real-time weather",
                        "集成 OpenWeatherAPI 实现实时天气"
                    )}</li>
                    <li>{t(
                        "Desktop and mobile versions available",
                        "提供桌面和移动版本"
                    )}</li>
                </ul>
                <p>
                    {t("Source:", "源代码：")}{" "}
                    <a
                        href="https://github.com/qizheYang/ShadowWalkerTheHuntington"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("GitHub Repo", "GitHub 仓库")}
                    </a>{" "}
                    |{" "}
                    <a
                        href="https://yangqizhe.com/huntingtonmap"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("Live App - Please ignore safety warnings", "在线体验 - 请忽略安全警告")}
                    </a>
                </p>

                <CodeBlock filePath="/code/app.py" language="python" title={t("Flask Backend (app.py)", "Flask 后端 (app.py)")} />
            </section>

            {/* Project 2 */}
            <section id="travelplanner">
                <h2>{t("Group Travel Planner", "团队旅行规划器")}</h2>
                <p>
                    {t(
                        "Web app built as part of CSCI 201, combining React frontend and Java backend with servlets and MySQL. Features include:",
                        "作为 CSCI 201 课程项目开发的 Web 应用，结合 React 前端和 Java 后端，使用 servlets 和 MySQL。功能包括："
                    )}
                </p>
                <ul>
                    <li>{t("Shared workspace for collaborative travel planning", "协作旅行规划的共享工作区")}</li>
                    <li>{t("Live polls for decision-making", "实时投票决策")}</li>
                    <li>{t("Integration with weather, hotel, and flight APIs", "集成天气、酒店和航班 API")}</li>
                    <li>{t("Authentication and multithreading support", "身份验证和多线程支持")}</li>
                </ul>
                <p>
                    {t("Source:", "源代码：")}{" "}
                    <a
                        href="https://github.com/qizheYang/usc_csci201_final_project"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("GitHub Repo (copy)", "GitHub 仓库（副本）")}
                    </a>
                </p>

                <CodeBlock
                    filePath="/code/APTest.java"
                    language="java"
                    title={t("JUnit API Test Suite (APITest.java)", "JUnit API 测试套件 (APITest.java)")}
                />
            </section>

            {/* Project 3 */}
            <section id="latin-chinese">
                <h2>{t("Latin–Chinese Translation", "拉丁文–中文翻译")}</h2>
                <p>
                    {t("With professors", "与")}{" "}
                    <a
                        href="https://dornsife.usc.edu/profile/lucas-herchenroeder/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dr. Lucas Herchenroeder
                    </a>{" "}
                    {t("and", "和")}{" "}
                    <a
                        href="https://dornsife.usc.edu/profile/stefano-rebeggiani/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dr. Stefano Rebeggiani
                    </a>
                    {t(
                        ", and two peers, translated Martino Martini's",
                        "两位教授及两位同学合作，将卫匡国的"
                    )}{" "}
                    <em>{t("On Friendship (逑友篇)", "《逑友篇》")}</em> {t(
                        "from Classical Chinese to modern English.",
                        "从古典中文翻译成现代英文。"
                    )}
                </p>
                <p>
                    {t("Learn more:", "了解更多：")}{" "}
                    <a
                        href="https://charm.havencreative.org/chinese-latin-translation/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("Official Website", "官方网站")}
                    </a>
                </p>

                <CodeBlock
                    filePath="/code/translate.txt"
                    language="markdown"
                    title={t("Translation Excerpt", "翻译节选")}
                />
            </section>

            {/* Project 4 */}
            <section id="bristled-fly">
                <h2>{t("Bristled Wings Robotic Fly", "刷毛翼机器蝇")}</h2>
                <p>
                    {t(
                        "Early-stage project with friends designing a robotic insect that uses",
                        "与朋友们合作的早期项目，设计一种使用"
                    )}{" "}
                    <a
                        href="https://www.pnas.org/doi/10.1073/pnas.2506403122"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("bristled wings", "刷毛翼")}
                    </a>{" "}
                    {t(
                        "instead of membranes. Planned features include computer vision and ML-based automatic routing.",
                        "而非薄膜翼的机器昆虫。计划功能包括计算机视觉和基于机器学习的自动路线规划。"
                    )}
                </p>
            </section>

            {/* Project 5 */}
            <section id="pfas">
                <h2>{t("PFAS Research", "PFAS 研究")}</h2>
                <p>
                    {t("Collaborated with", "与南加州大学维特比工程学院的")}{" "}
                    <a
                        href="https://viterbi.usc.edu/directory/faculty/Pirbazari/Massoud"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dr. Massoud Pirbazari
                    </a>{" "}
                    {t(
                        "at USC Viterbi on methodology for PFAS removal from water and air. Conducted in the",
                        "合作研究从水和空气中去除 PFAS 的方法。研究在"
                    )}{" "}
                    <a
                        href="https://cee.usc.edu/research/water-quality-research-group/swan/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("SWAN Lab", "SWAN 实验室")}
                    </a>
                    {t(". View the", "进行。查看")}{" "}
                    <a
                        href="/pdf_files/swan_pfas.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("final report", "最终报告")}
                    </a>{" "}
                    {t("here or visit the SWAN Lab website above and see No. 34.", "，或访问上方 SWAN 实验室网站查看第 34 项。")}
                </p>
            </section>

            {/* Project 6 */}
            <section id="formulae">
                <h2>{t("USC Formula E", "USC 电动方程式车队")}</h2>
                <p>
                    - {t(
                        "Designed and coded full dashboard interface using Arduino C++",
                        "使用 Arduino C++ 设计并编写完整的仪表盘界面"
                    )} <br />
                    - {t(
                        "Debugged and maintained GEVCU code",
                        "调试和维护 GEVCU 代码"
                    )} <br />
                    - {t(
                        "Devised and ran tests for CAN bus and motor cooling systems",
                        "设计并执行 CAN 总线和电机冷却系统测试"
                    )} <br />
                    <br />
                    {t("Source:", "源代码：")}{" "}
                    <a
                        href="https://github.com/SCFormulaElectric/dashboard_2024-2025"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("Dashboard Repo", "仪表盘仓库")}
                    </a>{" "}
                    |{" "}
                    <a
                        href="https://github.com/SCFormulaElectric/gevcu-2024-2025"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("GEVCU Repo", "GEVCU 仓库")}
                    </a>
                </p>

                <CodeBlock
                    filePath="/code/dashboard.ino"
                    language="cpp"
                    title={t("Arduino/Teensy Dashboard Code", "Arduino/Teensy 仪表盘代码")}
                />
            </section>
        </div>
    );
};

export default Projects;
