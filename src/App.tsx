import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./Header";
import Footer from "./Footer";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Games from "./pages/Games";
import Interests from "./pages/Interests";
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
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/interests" element={<Interests />} />
                        <Route path="/game" element={<Games />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </LanguageProvider>
    );
};

export default App;
