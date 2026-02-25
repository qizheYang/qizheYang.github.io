import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import CodeBlock from "./CodeBlock";
import type { Project } from "../data/projects";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [expanded, setExpanded] = useState(false);
    const { lang, t } = useLanguage();

    const details = lang === "en" ? project.detailsEn : project.detailsCn;
    const hasDetails = (details && details.length > 0) || project.codeBlock;

    return (
        <div className="project-card" id={project.id}>
            <div className="project-card-header">
                <h3>{t(project.titleEn, project.titleCn)}</h3>
                <div className="project-tags">
                    {project.vibeCoded && (
                        <span className="vibe-badge">{t("Vibe Coded", "AI 协作")}</span>
                    )}
                    {project.techStack.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>
            </div>
            <p className="project-card-desc">{t(project.descEn, project.descCn)}</p>

            {project.links && project.links.length > 0 && (
                <div className="project-card-links">
                    {project.links.map((link, i) => (
                        <React.Fragment key={link.url}>
                            {i > 0 && " | "}
                            <a
                                href={link.url}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                            >
                                {t(link.labelEn, link.labelCn)}
                            </a>
                        </React.Fragment>
                    ))}
                </div>
            )}

            {hasDetails && (
                <>
                    <button
                        className="project-expand-btn"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? t("Hide Details", "收起详情") : t("Show Details", "展开详情")}
                    </button>
                    <div className={`project-detail ${expanded ? "expanded" : ""}`}>
                        {details && details.length > 0 && (
                            <ul>
                                {details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                        {project.codeBlock && (
                            <CodeBlock
                                filePath={project.codeBlock.filePath}
                                language={project.codeBlock.language}
                                title={t(project.codeBlock.titleEn, project.codeBlock.titleCn)}
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectCard;
