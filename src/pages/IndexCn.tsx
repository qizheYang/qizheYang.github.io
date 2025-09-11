import React from "react";

const IndexCn: React.FC = () => {
    return (
        <div className="profile-grid">
            {/* 左岛 */}
            <div className="island left-island">
                <img src="/img/my_img.jpg" alt="杨淇喆" className="profile-img-square" />
                <h1>杨淇喆</h1>
                <p className="motto">厚德载物</p>
            </div>

            {/* 中岛 */}
            <div className="island mid-island">
                <p>
                    主观能动、充满激情、始终努力的南加州大学计算机科学本科生。<br /> <br />
                    擅长分析、归纳、研究计算机与其它学科的交点，具备一流的沟通与协作能力。
                </p>

                <h1>感谢你阅读中文页面</h1>

                <p>
                    计算机专业并辅修3D动画。已经完成包括 C++、数据结构与面向对象设计、微积分、线性代数与线性微分方程、概率论、物理基础、
                    软件开发宗旨（Java 与网页）、3D 动画。<br />
                    正在完成计算机图像（OpenGL）、人工智能入门与计算机系统。
                </p>

                <p>2025 年的夏天我在 The Huntington 亨廷顿图书馆、艺术廊与植物园的地理信息系统与软件实习岗位。</p>
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
                    </a>{" "}
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
