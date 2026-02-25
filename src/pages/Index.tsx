import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Index: React.FC = () => {
    const [showCourses, setShowCourses] = useState(false);
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
                                "CS Student | 3D Animation Minor | Vibe Coder | USC Viterbi",
                                "计算机科学 | 3D动画辅修 | AI 协作开发者 | 南加大维特比工程学院"
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
                    <p>
                        <strong>{t("USC Viterbi School of Engineering", "南加州大学维特比工程学院")}</strong>
                        <br />
                        {t("B.S. Computer Science, Junior", "计算机科学学士，大三在读")}
                        <br />
                        {t("Minor: 3D Animation (Cinematic Arts)", "辅修：3D动画（电影艺术学院）")}
                        <br />
                        GPA: 3.72
                    </p>
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
                        </ul>
                        <h4>{t("In Progress", "正在修读")}</h4>
                        <ul>
                            <li>{t("Machine Learning", "机器学习")}</li>
                            <li>{t("Internetworking", "网络互联")}</li>
                            <li>{t("Multi-platform Development (Flutter/Dart)", "跨平台开发（Flutter/Dart）")}</li>
                        </ul>
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
                            "Built Shadow Walker pathfinding app, ArcGIS web tools, and Python automation scripts. Attended Esri User Conference 2025.",
                            "开发了 Shadow Walker 路径规划应用、ArcGIS 网络工具及 Python 自动化脚本。参加了 Esri 2025 用户大会。"
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
                            "Interactive shade-aware pathfinding using A* algorithm and computer vision processed maps.",
                            "基于A*算法和计算机视觉处理地图的交互式阴凉路径规划应用。"
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
