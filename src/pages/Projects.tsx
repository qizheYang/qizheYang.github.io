import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import CategoryFilter from "../components/CategoryFilter";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const { t } = useLanguage();

    const filtered = activeCategory === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory);

    return (
        <div className="container">
            <h1>{t("Projects", "项目")}</h1>
            <p>{t("Here are highlights of my work and research.", "以下是我的工作和研究成果展示。")}</p>

            <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

            <div className="projects-grid">
                {filtered.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
