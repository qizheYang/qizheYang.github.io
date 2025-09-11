import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="footer-bar">
            <a href="/logo_display" target="_blank" rel="noopener noreferrer">
                <img src="/img/yqz_logo.svg" alt="Qizhe Yang Logo" />
            </a>
            <span>
        Hosted on{" "}
                <a
                    href="https://github.com/qizheYang/qizheYang.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          GitHub Pages
        </a>
                &nbsp; | &nbsp; &copy; 2025 Qizhe Yang
        <br />
        <span className="footer-credits">
          Built with{" "}
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            React
          </a>
          ,{" "}
            <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
            TypeScript
          </a>
          , and{" "}
            <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
            Vite
          </a>
        </span>
      </span>
        </div>
    );
};

export default Footer;
