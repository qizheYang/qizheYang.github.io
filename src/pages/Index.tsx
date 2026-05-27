import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Index: React.FC = () => {
    const [showCourses, setShowCourses] = useState(false);
    const [showIBDetails, setShowIBDetails] = useState(false);
    const { t } = useLanguage();

    return (
        <div className="container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <img
                        src="/img/my_img.jpg"
                        alt={t("Qizhe Yang", "杨淇喆")}
                        className="hero-photo"
                    />
                    <div className="hero-text">
                        <h1>{t("Qizhe Yang", "杨淇喆")}</h1>
                        <p className="hero-tagline">
                            {t(
                                "CS @ USC Viterbi | 3D Animation Minor | Vibe Coder",
                                "南加大维特比 计算机科学 | 3D动画辅修 | AI 协作开发者"
                            )}
                        </p>
                        <p className="hero-motto">{t("Virtue Bears All Things", "厚德载物")}</p>
                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/qizhe-yang/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("LinkedIn", "领英")}
                            </a>
                            <a
                                href="https://github.com/qizheyang"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a href="mailto:yangqizhex@gmail.com">{t("Email", "邮箱")}</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlight Cards */}
            <section className="highlight-cards">
                {/* Education Card */}
                <div className="highlight-card">
                    <h2>{t("Education", "教育背景")}</h2>
                    <div className="edu-entry">
                        <img src="/img/usc_viterbi_logo.png" alt="USC Viterbi" className="edu-logo" />
                        <div className="edu-info">
                            <strong>{t("USC Viterbi School of Engineering", "南加州大学维特比工程学院")}</strong>
                            <br />
                            {t("B.S. Computer Science, Junior", "计算机科学学士，大三在读")}
                            <br />
                            {t("Minor: 3D Animation (Cinematic Arts)", "辅修：3D动画（电影艺术学院）")}
                            <br />
                            GPA: 3.77
                        </div>
                    </div>
                    <button
                        className="course-toggle-btn"
                        onClick={() => setShowCourses(!showCourses)}
                    >
                        {showCourses
                            ? t("Hide Courses", "收起课程")
                            : t("View Coursework", "查看课程")}
                    </button>
                    <div className={`course-list ${showCourses ? "expanded" : ""}`}>
                        <h4>{t("Completed", "已完成")}</h4>
                        <ul>
                            <li>{t("Data Structures and OOP", "数据结构与面向对象编程")}</li>
                            <li>{t("Algorithms and Theory of Computing", "算法与计算理论")}</li>
                            <li>{t("Principles of Software Development", "软件开发原理")}</li>
                            <li>{t("3D Computer Animation (Maya)", "3D计算机动画（Maya）")}</li>
                            <li>{t("Calculus & Linear Algebra", "微积分与线性代数")}</li>
                            <li>{t("Physics & Probability Theory", "物理与概率论")}</li>
                            <li>{t("Computer Graphics (OpenGL)", "计算机图形学（OpenGL）")}</li>
                            <li>{t("Artificial Intelligence (Python)", "人工智能（Python）")}</li>
                            <li>{t("Computer Systems (C, Assembly)", "计算机系统（C、汇编）")}</li>
                            <li>{t("Machine Learning", "机器学习")}</li>
                            <li>{t("Internetworking", "网络互联")}</li>
                            <li>{t("Multi-platform Development (Flutter/Dart)", "跨平台开发（Flutter/Dart）")}</li>
                        </ul>
                        <h4>{t("In Progress", "正在修读")}</h4>
                        <ul>
                            <li>{t("Operating Systems", "操作系统")}</li>
                            <li>{t("Software Engineering", "软件工程")}</li>
                            <li>{t("AI in Cinematics", "电影艺术中的人工智能")}</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="edu-entry">
                        <img src="/img/pinghe_logo.png" alt="Shanghai Pinghe School" className="edu-logo" />
                        <div className="edu-info">
                            <strong>{t("Shanghai Pinghe Bilingual School", "上海市平和双语学校")}</strong>
                            <br />
                            {t("IB Bilingual Diploma, 41/45", "IB 双语文凭，41/45")}
                            <br />
                            {t("Class of 2023", "2023届")}
                            <button
                                className="ib-details-toggle"
                                onClick={() => setShowIBDetails(!showIBDetails)}
                            >
                                {showIBDetails ? t("Hide Scores", "收起成绩") : t("View Scores", "查看成绩")}
                            </button>
                            <div className={`ib-details ${showIBDetails ? "expanded" : ""}`}>
                                <span className="edu-ib-details">
                                    {t(
                                        "Math HL 7 · English B SL 7 · Chinese A SL 6 · Geography HL 6 · Chemistry HL 6 · Physics HL 6 · EE/TOK 3",
                                        "数学 HL 7 · 英语 B SL 7 · 中文 A SL 6 · 地理 HL 6 · 化学 HL 6 · 物理 HL 6 · EE/TOK 3"
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Card */}
                <div className="highlight-card">
                    <h2>{t("Experience", "工作经历")}</h2>
                    <p>
                        <strong>BMW</strong>
                        <br />
                        {t("AI Research Intern", "AI 研究实习生")}
                        <br />
                        {t("Jan 2026 - Present", "2026年1月 - 至今")}
                    </p>
                    <hr />
                    <p>
                        <strong>{t("The Huntington", "亨廷顿图书馆")}</strong>
                        <br />
                        {t("Software Engineering Intern", "软件工程实习生")}
                        <br />
                        {t("May - July 2025", "2025年5月 - 7月")}
                    </p>
                    <p>
                        {t(
                            "Developed Shadow Walker pathfinding app, ArcGIS web tools, and Python automation. Presented at Esri User Conference 2025.",
                            "开发了 Shadow Walker 路径规划应用、ArcGIS 网络工具及 Python 自动化脚本。在 Esri 2025 用户大会上展示。"
                        )}
                    </p>
                    <Link to="/projects" className="card-link">
                        {t("View Projects", "查看项目")} &rarr;
                    </Link>
                </div>

                {/* Featured Project Card */}
                <div className="highlight-card">
                    <h2>{t("Featured Project", "特色项目")}</h2>
                    <p>
                        <strong>Shadow Walker - {t("The Huntington", "亨廷顿")}</strong>
                        <br />
                        {t(
                            "Shade-aware pathfinding powered by A* and computer vision. Walk the coolest route through The Huntington's gardens.",
                            "基于 A* 算法与计算机视觉的阴凉路径规划。在亨廷顿花园中找到最凉爽的路线。"
                        )}
                    </p>
                    <a
                        href="https://yangqizhe.com/huntingtonmap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                    >
                        {t("Try Live Demo", "体验演示")} &rarr;
                    </a>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <Link to="/projects" className="cta-button">
                    {t("View All Projects", "查看全部项目")}
                </Link>
                <a
                    href="/pdf_files/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button cta-button-outline"
                >
                    {t("Download CV", "下载简历")}
                </a>
                <a href="mailto:yangqizhex@gmail.com" className="cta-button cta-button-outline">
                    {t("Contact Me", "联系我")}
                </a>
            </section>
        </div>
    );
};

export default Index;
