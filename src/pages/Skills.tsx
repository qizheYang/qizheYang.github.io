import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Skills: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1>{t("Skills & Portfolio", "技能与作品集")}</h1>

            {/* Technical Skills */}
            <section className="skills-section">
                <h2>{t("Technical Skills", "技术技能")}</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <h3>{t("Programming Languages", "编程语言")}</h3>
                        <p>C++ ({t("mainly", "主要")}), Python, Java, HTML, CSS, JavaScript, TypeScript, C, SQL, AT&T Assembly</p>
                    </div>
                    <div className="skill-card">
                        <h3>{t("Tools & Platforms", "工具与平台")}</h3>
                        <p>
                            ArcGIS Pro, LaTeX, Autodesk Maya, Final Cut Pro, Arduino, Teensy, MySQL
                        </p>
                    </div>
                    <div className="skill-card">
                        <h3>{t("Languages", "语言能力")}</h3>
                        <p>
                            {t(
                                "Chinese (native), English (fluent, professional), Japanese (beginner–intermediate)",
                                "中文（母语）、英文（流利、专业）、日语（入门至中级）"
                            )}
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Portfolio */}
            <section className="skills-section">
                <h2>{t("Additional Portfolio", "其他作品集")}</h2>
                <div className="project-list">
                    <div className="portfolio-block">
                        <h3>{t("3D Modeling & Animation", "3D 建模与动画")}</h3>
                        <p>
                            {t(
                                "Experience with Autodesk Maya for modeling, texturing, and rendering. Applied 3D animation minor coursework into technical and creative projects.",
                                "具有 Autodesk Maya 建模、贴图和渲染经验。将 3D 动画辅修课程应用于技术和创意项目。"
                            )}{" "}
                            {t("Class with", "师从")}{" "}
                            <a href="https://www.imdb.com/name/nm1220967/">Alessandro Jacomini</a>.{" "}
                            {t("See his", "参见他的")}{" "}
                            <a href="https://cinema.usc.edu/faculty/profile.cfm?id=67936">{t("USC site", "USC 页面")}</a>.
                        </p>
                        <div className="img-gallery">
                            <div>
                                <img src="/img/render_sample.jpg" alt={t("Render Sample CTAN 464", "CTAN 464 渲染样例")} />
                                <p className="img-desc">
                                    {t(
                                        "Coursework render sample exploring lighting and shading.",
                                        "探索光照和着色的课程作业渲染样例。"
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="video-gallery">
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/ctan464_final1.mp4" type="video/mp4" />
                                    {t("Your browser does not support the video tag.", "您的浏览器不支持视频标签。")}
                                </video>
                                <p className="video-desc">{t(
                                    "Maya Arnold render of \"Dad\" thinking in his office. Various lights are used.",
                                    "\"Dad\"在办公室思考的 Maya Arnold 渲染。使用了多种灯光。"
                                )}</p>
                            </div>
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/ctan464_final2.mp4" type="video/mp4" />
                                    {t("Your browser does not support the video tag.", "您的浏览器不支持视频标签。")}
                                </video>
                                <p className="video-desc">{t(
                                    "Maya Arnold render of \"Drew\" talking to \"Dad\" in the office. Various lights are used.",
                                    "\"Drew\"在办公室与\"Dad\"交谈的 Maya Arnold 渲染。使用了多种灯光。"
                                )}</p>
                            </div>
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/ctan464_final3.mp4" type="video/mp4" />
                                    {t("Your browser does not support the video tag.", "您的浏览器不支持视频标签。")}
                                </video>
                                <p className="video-desc">{t(
                                    "Maya Arnold render of \"Drew\" walking and talking to phone outside restaurant. Various lights are used.",
                                    "\"Drew\"在餐厅外边走边打电话的 Maya Arnold 渲染。使用了多种灯光。"
                                )}</p>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-block">
                        <h3>{t("Computer Graphics", "计算机图形学")}</h3>
                        <p>
                            {t(
                                "Studied CSCI 420 Computer Graphics at USC with",
                                "在南加州大学师从"
                            )}{" "}
                            <a href="https://odedstein.com">Professor Oded Stein</a>
                            {t(
                                ". As a beginner in this field, I created some elementary CG animation.",
                                "学习 CSCI 420 计算机图形学。作为该领域的初学者，我创作了一些基础的计算机图形动画。"
                            )}
                        </p>
                        <div className="video-gallery">
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/csci420a1.mp4" type="video/mp4" />
                                    {t("Your browser does not support the video tag.", "您的浏览器不支持视频标签。")}
                                </video>
                                <p className="video-desc">{t(
                                    "OpenGL 3D Animation on height map, including a set of UX controls.",
                                    "基于高度图的 OpenGL 3D 动画，包含一组用户交互控件。"
                                )}</p>
                            </div>
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/csci420a2.mp4" type="video/mp4" />
                                    {t("Your browser does not support the video tag.", "您的浏览器不支持视频标签。")}
                                </video>
                                <p className="video-desc">{t(
                                    "OpenGL 3D Animation on roller coaster built on Catmull-Rom Splines.",
                                    "基于 Catmull-Rom 样条的过山车 OpenGL 3D 动画。"
                                )}</p>
                            </div>
                        </div>
                        <div className="img-gallery">
                            <div>
                                <img src="/img/csci420cga3-1.jpg" alt={t("Render Sample with Basic Ray Tracing", "基础光线追踪渲染样例")} />
                                <p className="img-desc">
                                    {t("Basic ray tracing product.", "基础光线追踪产品。")}
                                </p>
                            </div>
                            <div>
                                <img src="/img/csci420cga3-2.jpg" alt={t("First Iteration in Ray Tracing", "光线追踪第一次迭代")} />
                                <p className="img-desc">
                                    {t(
                                        "Improved ray tracing product with anti-aliasing, soft shadows and recursive reflections.",
                                        "改进的光线追踪产品，添加了抗锯齿、软阴影和递归反射。"
                                    )}
                                </p>
                            </div>
                            <div>
                                <img src="/img/csci420cga3-3.jpg" alt={t("Second Iteration in Ray Tracing", "光线追踪第二次迭代")} />
                                <p className="img-desc">
                                    {t(
                                        "Greatly improved ray tracing product with Monte-Carlo coloring, referring to",
                                        "大幅改进的光线追踪产品，采用蒙特卡洛着色，参考"
                                    )}{" "}
                                    <a href="https://odedstein.com/teaching/hs-2025-csci-420/assign3/extension/index.html">
                                        {t("CSCI 420 Fall 2025 Course Website", "CSCI 420 2025 秋季课程网站")}
                                    </a>.
                                </p>
                            </div>
                        </div>
                        <p>
                            Talk is cheap, show me your
                            <a href="https://github.com/qizheYang/usc_csci420_f25_a1"> {t("Height Map", "高度图")}</a>,
                            <a href="https://github.com/qizheYang/usc_csci420_f25_a2"> {t("Roller Coaster", "过山车")}</a>,
                            <a href="https://github.com/qizheYang/usc_csci420_f25_a3"> {t("Ray Tracer", "光线追踪器")}</a>.{" "}
                            {t("Click to view code.", "点击查看代码。")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Works before College */}
            <section className="skills-section">
                <h2>{t("Works and Research before College", "大学前的作品与研究")}</h2>
                <div className="project-list">
                    <div className="portfolio-block">
                        <h3>{t("IB Geography Extended Essay", "IB 地理扩展论文")}</h3>
                        <p>
                            {t(
                                "Conducted water and air quality research around Jinji Lake and Baitang Eco Park. Compared records with my measurements and concluded improvements in Suzhou Industrial Park.",
                                "在金鸡湖和白塘生态园周围进行了水质和空气质量研究。将记录与我的测量结果进行比较，得出苏州工业园区环境改善的结论。"
                            )}<br />
                            <strong>{t("Result:", "成绩：")}</strong> {t("Received an A rank.", "A 等级。")}{" "}
                            <a
                                href="/pdf_files/ib_geo_ee.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("View PDF", "查看 PDF")}
                            </a>
                        </p>

                        <h3>{t("CECA Researcher", "CECA 研究员")}</h3>
                        <p>
                            {t(
                                "Conducted research on environmental impacts of construction at Hongwan Port, Zhuhai. Used geospatial analysis tools to assess risks and propose sustainable practices.",
                                "对珠海洪湾港建设的环境影响进行研究。使用地理空间分析工具评估风险并提出可持续发展建议。"
                            )}
                        </p>

                        <h3>{t("Envirothon Researcher", "环境科学奥林匹克研究员")}</h3>
                        <p>
                            {t(
                                "Team project on soy plants (Glycine Max Merr.) for nitrogen reduction near waterways in suburban Shanghai.",
                                "关于在上海郊区水道附近种植大豆（Glycine Max Merr.）以减少氮污染的团队项目。"
                            )}<br />
                            <strong>{t("Award:", "奖项：")}</strong> {t("National First Prize.", "全国一等奖。")}{" "}
                            <a
                                href="/pdf_files/envi_si.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("View PDF", "查看 PDF")}
                            </a>
                        </p>

                        <h3>{t("BaoSteel Institute Research", "宝钢研究院研究")}</h3>
                        <p>
                            {t(
                                "Research on ventilation designs using ANSYS simulation for basement fire safety. Guided by Dr. Sanbin Ren.",
                                "使用 ANSYS 模拟研究地下室消防安全的通风设计。由任三斌博士指导。"
                            )}{" "}
                            <a
                                href="/pdf_files/basement.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t("View PDF", "查看 PDF")}
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
