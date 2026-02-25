import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./Header";
import Footer from "./Footer";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import "./App.css";

const App: React.FC = () => {
    return (
        <LanguageProvider>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/about" element={<About />} />
                        {/* Redirects for old routes */}
                        <Route path="/skills" element={<Navigate to="/portfolio" replace />} />
                        <Route path="/interests" element={<Navigate to="/about" replace />} />
                        <Route path="/game" element={<Navigate to="/projects" replace />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </LanguageProvider>
    );
};

export default App;
