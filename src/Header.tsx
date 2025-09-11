import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <a href="/pdf_files/cv.pdf" target="_blank" rel="noopener noreferrer">
                    CV
                </a>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/interests">Other Interests</Link>
                <Link to="/index-cn">中文</Link>
            </nav>
        </header>
    );
};

export default Header;
