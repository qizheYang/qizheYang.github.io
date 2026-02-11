import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Games: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="container">
            <h1>{t("Games", "游戏")}</h1>
            <p>
                {t("Interactive games and visualizations I've built. Now hosted at", "我制作的交互式游戏和可视化项目。现托管于")}{" "}
                <a href="https://rehydratedwater.com" target="_blank" rel="noopener noreferrer">
                    rehydratedwater.com
                </a>
                {t(".", "。")}
            </p>
        </div>
    );
};

export default Games;
