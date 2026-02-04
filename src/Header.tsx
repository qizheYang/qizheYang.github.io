import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { lang, setLang, t } = useLanguage();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleLanguage = () => {
        setLang(lang === "en" ? "cn" : "en");
        closeMenu();
    };

    return (
        <header className="site-header">
            <nav className="nav-bar">
                <button
                    className={`nav-toggle ${menuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label={t("Toggle navigation menu", "切换导航菜单")}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/" onClick={closeMenu}>{t("Home", "首页")}</Link>
                    <a href="/pdf_files/cv.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                        {t("CV", "简历")}
                    </a>
                    <Link to="/projects" onClick={closeMenu}>{t("Projects", "项目")}</Link>
                    <Link to="/skills" onClick={closeMenu}>{t("Skills", "技能")}</Link>
                    <Link to="/game" onClick={closeMenu}>{t("Games", "游戏")}</Link>
                    <Link to="/interests" onClick={closeMenu}>{t("Other Interests", "其他兴趣")}</Link>
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        {lang === "en" ? "中文" : "English"}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
