import React from "react";

const Skills: React.FC = () => {
    return (
        <div className="container">
            <h1>Skills & Portfolio</h1>

            {/* Technical Skills */}
            <section className="skills-section">
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <h3>Programming Languages</h3>
                        <p>C++, Python, Java, HTML, CSS, JavaScript, C, SQL</p>
                    </div>
                    <div className="skill-card">
                        <h3>Tools & Platforms</h3>
                        <p>
                            ArcGIS Pro, LaTeX, Autodesk Maya, Final Cut Pro, Arduino, Teensy, MySQL
                        </p>
                    </div>
                    <div className="skill-card">
                        <h3>Languages</h3>
                        <p>
                            Chinese (native), English (fluent, professional), Japanese (beginner–
                            intermediate)
                            中文（母语）、英文（流利、专业）、日语（入门至普通）
                            中国語（母語)、英語（プロ）、日本語（初心者）
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Portfolio */}
            <section className="skills-section">
                <h2>Additional Portfolio</h2>
                <div className="project-list">
                    <div className="portfolio-block">
                        <h3>3D Modeling & Animation</h3>
                        <p>
                            Experience with Autodesk Maya for modeling, texturing, and rendering.
                            Applied 3D animation minor coursework into technical and creative projects.
                        </p>
                        <div className="img-gallery">
                            <div>
                                <img src="/img/render_sample.jpg" alt="Render Sample CTAN 464" />
                                <p className="img-desc">
                                    Coursework render sample exploring lighting and shading
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-block">
                        <h3>Computer Graphics</h3>
                        <p>
                            Currently learning to use OpenGL to render 3D graphics. This is a work in
                            progress.
                        </p>
                    </div>
                </div>
            </section>

            {/* Works before College */}
            <section className="skills-section">
                <h2>Works and Research before College</h2>
                <div className="project-list">
                    <div className="portfolio-block">
                        <h3>IB Geography Extended Essay</h3>
                        <p>
                            Conducted water and air quality research around Jinji Lake and Baitang Eco
                            Park. Compared records with my measurements and concluded improvements in
                            Suzhou Industrial Park. <br />
                            <strong>Result:</strong> Received an A rank.{" "}
                            <a
                                href="/pdf_files/ib_geo_ee.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View PDF
                            </a>
                        </p>

                        <h3>CECA Researcher</h3>
                        <p>
                            Conducted research on environmental impacts of construction at Hongwan Port,
                            Zhuhai. Used geospatial analysis tools to assess risks and propose sustainable
                            practices.
                        </p>

                        <h3>Envirothon Researcher</h3>
                        <p>
                            Team project on soy plants (Glycine Max Merr.) for nitrogen reduction near
                            waterways in suburban Shanghai. <br />
                            <strong>Award:</strong> National First Prize.{" "}
                            <a
                                href="/pdf_files/envi_si.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View PDF
                            </a>
                        </p>

                        <h3>BaoSteel Institute Research</h3>
                        <p>
                            Research on ventilation designs using ANSYS simulation for basement fire
                            safety. Guided by Dr. Sanbin Ren.{" "}
                            <a
                                href="/pdf_files/basement.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View PDF
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
