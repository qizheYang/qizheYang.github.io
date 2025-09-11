import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Index from "./pages/Index";
import IndexCn from "./pages/IndexCn";
import "./App.css";
import Skills from "./pages/Skills.tsx";
import Interests from "./pages/Interests.tsx";
import Projects from "./pages/Projects.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/index-cn" element={<IndexCn />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/interests" element={<Interests />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
