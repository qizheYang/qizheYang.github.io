import React from "react";

const Interests: React.FC = () => {
    return (
        <div className="container">
            <h1>Other Interests</h1>
            <ul className="project-list">
                <li>
                    <h2>Environmental Protection</h2>
                    <p>
                        I participated in multiple environmental protection activities in China. I also
                        focus on how to use technology to protect the environment.
                    </p>
                </li>

                <li>
                    <h2>Mahjong</h2>
                    <p>
                        My father is from Sichuan where Mahjong is the most popular game. I started to
                        play Riichi Mahjong in 2021. Participated in the AMOS Fes in Las Vegas in June
                        2025.
                    </p>
                    <div className="img-gallery">
                        <div>
                            <img src="/img/mahjong_qys_start.jpeg" alt="Mahjong QYS Start" />
                            <p className="img-desc">My great Haipai at the start of the game</p>
                        </div>
                        <div>
                            <img src="/img/mahjong_qys_end.jpeg" alt="Mahjong QYS End" />
                            <p className="img-desc">Fantastic Sanbaiman ending on September 5, 2025</p>
                        </div>
                    </div>
                </li>

                <li>
                    <h2>Japanese Animation</h2>
                    <p>
                        Big fan of Japanese animation. Visited Japan multiple times to see real world
                        scenes from shows.
                    </p>
                </li>

                <li>
                    <h2>Traveling</h2>
                    <p>
                        Traveled across China and Japan (Tokyo, Osaka, Kyoto, Nagasaki). In the US,
                        explored coasts, national parks, and forests.
                    </p>
                    <div className="img-gallery">
                        <div>
                            <img src="/img/yosemite_2025.jpeg" alt="Yosemite" />
                            <p className="img-desc">
                                Pictured summer 2025 using Fujifilm X-T2 with 18-55mm lens
                            </p>
                        </div>
                    </div>
                </li>

                <li>
                    <h2>Football/Soccer</h2>
                    <p>
                        Supporter of Manchester United. Traveled to Old Trafford in April 2024 for MUFC
                        vs Liverpool. Looking forward to World Cup 2026.
                    </p>
                    <div className="img-gallery">
                        <div>
                            <img src="/img/me_at_old_trafford.jpeg" alt="MUFC v Liverpool" />
                            <p className="img-desc">
                                April 7, 2024 — Manchester United vs. Liverpool at Old Trafford
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Interests;
