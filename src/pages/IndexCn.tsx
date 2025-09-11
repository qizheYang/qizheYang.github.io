import React from "react";

const IndexCn: React.FC = () => {
    return (
        <div className="profile-grid">
            {/* 左岛 */}
            <div className="island left-island">
                <img
                    src="/img/my_img.jpg"
                    alt="杨淇喆"
                    className="profile-img-square"
                />
                <h1>杨淇喆</h1>
                <p className="motto">厚德载物</p>
            </div>

            {/* 中岛 */}
            <div className="island mid-island">
                <section className="about-section">
                    <h2>欢迎</h2>
                    <p>
                        南加州大学计算机科学本科生，主观能动、充满激情、始终努力。<br />
                        擅长分析与研究计算机与其它学科的交点，具备一流的沟通与协作能力。
                    </p>
                </section>

                <section className="academics-section">
                    <h2>学术背景</h2>
                    <p>
                        南加州大学维特比工程学院计算机科学专业，大三在读 <br />
                        辅修电影艺术学院的 3D 动画 <br />
                        GPA：3.64
                    </p>

                    <h3>已完成课程</h3>
                    <ul>
                        <li>C++ 程序设计入门</li>
                        <li>数据结构与面向对象设计</li>
                        <li>微积分</li>
                        <li>线性代数与线性微分方程</li>
                        <li>物理基础</li>
                        <li>概率论</li>
                        <li>算法与计算理论导论</li>
                        <li>软件开发宗旨（Java、HTML、CSS、JavaScript、SQL）</li>
                        <li>三维计算机动画入门（Maya）</li>
                    </ul>

                    <h3>正在修读课程</h3>
                    <ul>
                        <li>计算机图形学（OpenGL）</li>
                        <li>人工智能导论（Python）</li>
                        <li>计算机系统（C、汇编）</li>
                    </ul>
                </section>

                <section className="internship-section">
                    <h2>实习经历</h2>
                    <p>
                        2025 年夏天，我在{" "}
                        <a
                            href="https://huntington.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            亨廷顿图书馆、艺术廊与植物园
                        </a>{" "}
                        担任 GIS 与软件实习生。
                    </p>
                    <ul>
                        <li>
                            参与跨学科项目，包括{" "}
                            <a
                                href="https://yangqizhe.com/projects"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Shadow Walker 项目
                            </a>
                            、ArcGIS Web 地图、仪表盘与故事地图。
                        </li>
                        <li>编写自动化 Python 脚本，用于 ArcGIS 链接验证。</li>
                        <li>参加 Esri 2025 用户大会。</li>
                    </ul>
                    <div className="img-gallery">
                        <div>
                            <img src="/img/uc25_name.jpg" alt="UC25 胸牌" />
                            <p className="img-desc">Esri UC25 我的胸牌</p>
                        </div>
                    </div>
                    <p>实习由亨廷顿与南加州大学 Dornsife Career Pathways Gateway Program 支持。</p>
                </section>
            </div>

            {/* 右岛 */}
            <div className="island right-island contact-box">
                <h2>联系方式</h2>
                <p>
                    <a href="mailto:yangqizhex@gmail.com">yangqizhex@gmail.com</a> <br />
                    <a href="mailto:yangchar@usc.edu">yangchar@usc.edu</a> <br />
                    微信: Dehydrated_Water
                </p>

                <h2>网站链接</h2>
                <p>
                    <a
                        href="https://linkedin.com/in/qizhe-yang"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        领英 LinkedIn
                    </a>
                    <br />
                    <a
                        href="https://github.com/qizheyang"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    );
};

export default IndexCn;
