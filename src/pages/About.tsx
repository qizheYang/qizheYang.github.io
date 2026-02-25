import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1>{t("About Me", "关于我")}</h1>

            {/* Vibe Coding Philosophy */}
            <section className="skills-section">
                <h2>{t("Vibe Coding", "AI 协作开发")}</h2>
                <p>
                    {t(
                        "I embrace \"vibe coding\" — rapidly prototyping and building projects in collaboration with AI tools like Claude. Many of my projects, from the Riichi Mahjong game engine to the streaming platform, were developed through human-AI pair programming. I believe AI is the best collaborator for turning ideas into working software.",
                        "我拥抱「AI 协作开发」—— 与 Claude 等 AI 工具合作，快速原型设计和构建项目。从立直麻将游戏引擎到直播平台，我的许多项目都是通过人机结对编程开发的。我相信 AI 是将创意转化为可用软件的最佳合作伙伴。"
                    )}
                </p>
            </section>

            {/* Technical Skills */}
            <section className="skills-section">
                <h2>{t("Technical Skills", "技术技能")}</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <h3>{t("Programming Languages", "编程语言")}</h3>
                        <p>C++ ({t("mainly", "主要")}), Python, Java, Dart, HTML, CSS, JavaScript, TypeScript, Swift, C, SQL, AT&T Assembly</p>
                    </div>
                    <div className="skill-card">
                        <h3>{t("Tools & Platforms", "工具与平台")}</h3>
                        <p>
                            Flutter, React, Node.js, ArcGIS Pro, LaTeX, Autodesk Maya, Final Cut Pro, Arduino, Teensy, MySQL, Nginx
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

            {/* Interests */}
            <section className="skills-section">
                <h2>{t("Interests", "兴趣爱好")}</h2>
                <ul className="project-list">
                    <li>
                        <h3>{t("Environmental Protection", "环境保护")}</h3>
                        <p>
                            {t(
                                "I participated in multiple environmental protection activities in China. I also focus on how to use technology to protect the environment.",
                                "我在中国参与了多项环境保护活动。我也关注如何利用技术保护环境。"
                            )}
                        </p>
                    </li>

                    <li>
                        <h3>{t("Mahjong", "麻将")}</h3>
                        <p>
                            {t(
                                "My father is from Sichuan where Mahjong is the most popular game. I started to play Riichi Mahjong in 2021. Participated in the AMOS Fes in Las Vegas in June 2025.",
                                "我父亲来自四川，那里麻将是最受欢迎的游戏。我从 2021 年开始打日本立直麻将。2025 年 6 月参加了拉斯维加斯的 AMOS Fes。"
                            )}
                        </p>
                        <div className="img-gallery">
                            <div>
                                <img src="/img/mahjong_qys_start.jpeg" alt={t("Mahjong QYS Start", "麻将起手")} />
                                <p className="img-desc">{t("My great Haipai at the start of the game", "游戏开始时的绝佳配牌")}</p>
                            </div>
                            <div>
                                <img src="/img/mahjong_qys_end.jpeg" alt={t("Mahjong QYS End", "麻将结束")} />
                                <p className="img-desc">{t("Fantastic Sanbaiman ending on September 5, 2025", "2025年9月5日的精彩三倍满结局")}</p>
                            </div>
                        </div>
                        <p>
                            {t(
                                "In November 2025, I attended the Universities of California Mahjong League Tournament in Irvine with alumni from multiple UC campuses and USC. Won champion in this Tournament.",
                                "2025 年 11 月，我与多所加州大学和南加大的校友一起参加了在尔湾举办的加州大学麻将联赛。在该锦标赛中获得冠军。"
                            )}
                        </p>
                        <div className="img-gallery">
                            <div>
                                <img src="/img/mahjong_ucml_d1.jpeg" alt={t("UCML Day 1", "UCML 第一天")} />
                                <p className="img-desc">{t("Me in game during Day 1 Group Stage", "第一天小组赛进行中的我")}</p>
                            </div>
                            <div>
                                <img src="/img/mahjong_ucml_d2.jpeg" alt={t("UCML Award", "UCML 颁奖")} />
                                <p className="img-desc">{t(
                                    "Holding 18000 points and the decisive 6m that helped me champion the tournament, shot with competitor who got into semifinals",
                                    "手握 18000 点和帮助我夺冠的关键 6 万，与进入半决赛的选手合影"
                                )}</p>
                            </div>
                        </div>
                        <p>
                            {t("I also build mahjong software — see my", "我也开发麻将软件 —— 查看我的")}{" "}
                            <Link to="/projects">{t("Mahjong projects", "麻将项目")}</Link>.
                        </p>
                    </li>

                    <li>
                        <h3>{t("Japanese Animation", "日本动画")}</h3>
                        <p>
                            {t(
                                "Big fan of Japanese animation. Visited Japan multiple times to see real world scenes from shows.",
                                "日本动画的忠实粉丝。多次访问日本，参观动画中的现实场景。"
                            )}
                        </p>
                    </li>

                    <li>
                        <h3>{t("Traveling", "旅行")}</h3>
                        <p>
                            {t(
                                "Traveled across China and Japan (Tokyo, Osaka, Kyoto, Nagasaki). In the US, explored coasts, national parks, and forests.",
                                "游历了中国各地和日本（东京、大阪、京都、长崎）。在美国，探索了海岸、国家公园和森林。"
                            )}
                        </p>
                        <div className="img-gallery">
                            <div>
                                <img src="/img/yosemite_2025.jpeg" alt={t("Yosemite", "优胜美地")} />
                                <p className="img-desc">
                                    {t(
                                        "Pictured summer 2025 using Fujifilm X-T2 with 18-55mm lens",
                                        "2025 年夏天使用富士 X-T2 配 18-55mm 镜头拍摄"
                                    )}
                                </p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <h3>{t("Football/Soccer", "足球")}</h3>
                        <p>
                            {t(
                                "Supporter of Manchester United. Traveled to Old Trafford in April 2024 for MUFC vs Liverpool. Looking forward to World Cup 2026.",
                                "曼联球迷。2024 年 4 月前往老特拉福德观看曼联对利物浦。期待 2026 年世界杯。"
                            )}
                        </p>
                        <div className="img-gallery">
                            <div>
                                <img src="/img/me_at_old_trafford.jpeg" alt={t("MUFC v Liverpool", "曼联对利物浦")} />
                                <p className="img-desc">
                                    {t(
                                        "April 7, 2024 — Manchester United vs. Liverpool at Old Trafford",
                                        "2024年4月7日 — 曼联对利物浦于老特拉福德"
                                    )}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default About;
