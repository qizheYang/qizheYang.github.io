import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Interests: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1>{t("Other Interests", "其他兴趣")}</h1>
            <ul className="project-list">
                <li>
                    <h2>{t("Environmental Protection", "环境保护")}</h2>
                    <p>
                        {t(
                            "I participated in multiple environmental protection activities in China. I also focus on how to use technology to protect the environment.",
                            "我在中国参与了多项环境保护活动。我也关注如何利用技术保护环境。"
                        )}
                    </p>
                </li>

                <li>
                    <h2>{t("Mahjong", "麻将")}</h2>
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
                            <img src="/img/mahjong_ucml_d1.jpeg" alt={t("UCML Day 1 Group Stage In Game", "UCML 第一天小组赛进行中")} />
                            <p className="img-desc">{t("Me in game during Day 1 Group Stage", "第一天小组赛进行中的我")}</p>
                        </div>
                        <div>
                            <img src="/img/mahjong_ucml_d2.jpeg" alt={t("UCML Award Image", "UCML 颁奖照片")} />
                            <p className="img-desc">{t(
                                "Holding 18000 points and the decisive 6m that helped me champion the tournament, shot with competitor who got into semifinals",
                                "手握 18000 点和帮助我夺冠的关键 6 万，与进入半决赛的选手合影"
                            )}</p>
                        </div>
                    </div>
                </li>

                <li>
                    <h2>{t("Japanese Animation", "日本动画")}</h2>
                    <p>
                        {t(
                            "Big fan of Japanese animation. Visited Japan multiple times to see real world scenes from shows.",
                            "日本动画的忠实粉丝。多次访问日本，参观动画中的现实场景。"
                        )}
                    </p>
                </li>

                <li>
                    <h2>{t("Traveling", "旅行")}</h2>
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
                    <h2>{t("Football/Soccer", "足球")}</h2>
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
        </div>
    );
};

export default Interests;
