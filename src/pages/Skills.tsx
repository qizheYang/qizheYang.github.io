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
                        <p>C++ (mainly), Python, Java, HTML, CSS, JavaScript, TypeScript, C, SQL, AT&T Assembly</p>
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
                            Class with <a href="https://www.imdb.com/name/nm1220967/">Alessandro Jacomini</a>. 
                            see his <a href="https://cinema.usc.edu/faculty/profile.cfm?id=67936">USC site</a>.
                        </p>
                        <div className="img-gallery">
                            <div>
                                <img src="/img/render_sample.jpg" alt="Render Sample CTAN 464" />
                                <p className="img-desc">
                                    Coursework render sample exploring lighting and shading.
                                </p>
                            </div>
                        </div>
                        <div className="video-gallery">
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/ctan464_final1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="video-desc">Maya Arnold render of "Dad" thinking in his office. Various lights are used.</p>
                            </div>
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/ctan464_final2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="video-desc">Maya Arnold render of "Drew" talking to "Dad" in the office. Various lights are used.</p>
                            </div>
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/ctan464_final3.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="video-desc">Maya Arnold render of "Drew" walking and talking to phone outside restaurant. Various lights are used.</p>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-block">
                        <h3>Computer Graphics</h3>
                        <p>
                            Studied CSCI 420 Computer Graphics at USC with <a href="odedstein.com">Professor Oded Stein</a>.
                            As a beginner in this field, I created some elementary CG animation.
                        </p>
                        <div className="video-gallery">
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/csci420a1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="video-desc">OpenGL 3D Animation on height map, including a set of UX controls.</p>
                            </div>
                            <div className="video-item">
                                <video controls width="100%">
                                    <source src="/video/csci420a2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="video-desc">OpenGL 3D Animation on roller coaster built on Catmull-Rom Splines.</p>
                            </div>
                        </div>
                        <div className="img-gallery">
                            <div>
                                <img src="/img/csci420cga3-1.jpg" alt="Render Sample with Basic Ray Tracing" />
                                <p className="img-desc">
                                    Basic ray tracing product.
                                </p>
                            </div>
                            <div>
                                <img src="/img/csci420cga3-2.jpg" alt="First Iteration in Ray Tracing" />
                                <p className="img-desc">
                                    Improved ray tracing product with anti-aliasing, soft shadows and recursive reflections.
                                </p>
                            </div>
                            <div>
                                <img src="/img/csci420cga3-3.jpg" alt="Second Iteration in Ray Tracing" />
                                <p className="img-desc">
                                    Greatly improved ray tracing product with Monte-Carlo coloring, referring to <a href="https://odedstein.com/teaching/hs-2025-csci-420/assign3/extension/index.html">CSCI 420 Fall 2025 Course Website</a>.
                                </p>
                            </div>
                        </div>
                        <p>
                            Talk is cheap, show me your
                            <a href="https://github.com/qizheYang/usc_csci420_f25_a1"> Height Map</a>,
                            <a href="https://github.com/qizheYang/usc_csci420_f25_a2"> Roller Coaster</a>,
                            <a href="https://github.com/qizheYang/usc_csci420_f25_a3"> Ray Tracer</a>. 
                            Click to view code.
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
