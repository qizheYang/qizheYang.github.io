import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Games: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1>{t("Games", "游戏")}</h1>
            <p>{t("Interactive games and visualizations I've built.", "我制作的交互式游戏和可视化项目。")}</p>

            <div className="games-grid">
                <a href="/game/pathfinding/" className="game-card">
                    <img
                        src="/game/pathfinding/icons/Icon-192.png"
                        alt={t("A* Pathfinding Game", "A* 寻路游戏")}
                        className="game-icon"
                    />
                    <div className="game-info">
                        <h2>{t("A* Pathfinding", "A* 寻路算法")}</h2>
                        <p>
                            {t(
                                "Interactive visualization of the A* pathfinding algorithm. Place walls, set start and end points, and watch the algorithm find the shortest path.",
                                "A* 寻路算法的交互式可视化。放置墙壁，设置起点和终点，观看算法寻找最短路径。"
                            )}
                        </p>
                    </div>
                </a>

                <a href="/game/cidle/" className="game-card">
                    <img
                        src="/game/cidle/icons/Icon-192.png"
                        alt={t("Cidle - Chinese Wordle", "Cidle - 中文猜词")}
                        className="game-icon"
                    />
                    <div className="game-info">
                        <h2>{t("Cidle (Chinese Wordle)", "Cidle（中文 Wordle）")}</h2>
                        <p>
                            {t(
                                "A Chinese word guessing game inspired by Wordle. Guess the hidden Chinese characters using pinyin hints.",
                                "受 Wordle 启发的中文猜词游戏。使用拼音提示猜出隐藏的汉字。"
                            )}
                        </p>
                    </div>
                </a>

                <a href="/game/2048/" className="game-card">
                    <img
                        src="/game/2048/icons/Icon-192.png"
                        alt={t("2048 Magicful Edition", "2048 魔法版")}
                        className="game-icon"
                    />
                    <div className="game-info">
                        <h2>{t("2048 Magicful Edition", "2048 魔法版")}</h2>
                        <p>
                            {t(
                                "The classic 2048 puzzle game with a magical twist. Slide tiles, combine numbers, and reach 2048!!",
                                "经典 2048 益智游戏的魔法版本。滑动方块，合并数字，达到 2048！！"
                            )}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Games;
