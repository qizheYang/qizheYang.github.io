import React from "react";
import CodeBlock from "../components/CodeBlock";

const Projects: React.FC = () => {
    return (
        <div className="container">
            <h1>Projects</h1>
            <p>Here are highlights of my work and research.</p>

            {/* Website */}
            <section id="website">
                <h2>This Website (yangqizhe.com)</h2>
                <p>
                    A personal site built with React, TypeScript, and Vite. <br/>
                    Hosted on GitHub Pages. <br/>
                    What is not in my CV is here. <br/> <br/>
                    To view the full source code of this website, please visit{" "}
                    <a
                        href="https://github.com/qizheYang/qizheYang.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        the GitHub repository
                    </a>.
                </p>
            </section>

            {/* Project 1 */}
            <section id="shadowwalker">
                <h2>Shadow Walker – The Huntington</h2>
                <p>
                    Interactive web application built with Python (Flask), computer vision processed
                    shade maps, and A* pathfinding.
                </p>
                <ul>
                    <li>Dynamic A* pathfinding with shade-aware cost function</li>
                    <li>
                    Shade maps from{" "}
                        <a href="https://shademap.app" target="_blank" rel="noopener noreferrer">
                            ShadeMap
                        </a>{" "}
                        processed with computer vision
                    </li>
                    <li>Interactive UI with zoomable map, compass, customizable POIs</li>
                    <li>Integration with OpenWeatherAPI for real-time weather</li>
                    <li>Desktop and mobile versions available</li>
                </ul>
                <p>
                    Source:{" "}
                    <a
                        href="https://github.com/qizheYang/ShadowWalkerTheHuntington"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub Repo
                    </a>{" "}
                    |{" "}
                    <a
                        href="https://walkhuntington.yangqizhe.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live App
                    </a>
                </p>

                <CodeBlock filePath="/code/app.py" language="python" title="Flask Backend (app.py)" />
            </section>

            {/* Project 2 */}
            <section id="travelplanner">
                <h2>Group Travel Planner</h2>
                <p>
                    Web app built as part of CSCI 201, combining React frontend and Java backend with
                    servlets and MySQL. Features include:
                </p>
                <ul>
                    <li>Shared workspace for collaborative travel planning</li>
                    <li>Live polls for decision-making</li>
                    <li>Integration with weather, hotel, and flight APIs</li>
                    <li>Authentication and multithreading support</li>
                </ul>
                <p>
                    Source:{" "}
                    <a
                        href="https://github.com/Daniel0701/CSCI201-Final-Project"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub Repo
                    </a>
                </p>

                <CodeBlock
                    filePath="/code/APTest.java"
                    language="java"
                    title="JUnit API Test Suite (APITest.java)"
                />
            </section>

            {/* Project 3 */}
            <section id="latin-chinese">
                <h2>Latin–Chinese Translation</h2>
                <p>
                    With professors{" "}
                    <a
                        href="https://dornsife.usc.edu/profile/lucas-herchenroeder/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dr. Lucas Herchenroeder
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://dornsife.usc.edu/profile/stefano-rebeggiani/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dr. Stefano Rebeggiani
                    </a>
                    , and two peers, translated Martino Martini’s{" "}
                    <em>On Friendship (逑友篇)</em> from Classical Chinese to modern English.
                </p>
                <p>
                    Learn more:{" "}
                    <a
                        href="https://charm.havencreative.org/chinese-latin-translation/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Official Website
                    </a>
                </p>

                <CodeBlock
                    filePath="/code/translate.txt"
                    language="markdown"
                    title="Translation Excerpt"
                />
            </section>

            {/* Project 4 */}
            <section id="bristled-fly">
                <h2>Bristled Wings Robotic Fly</h2>
                <p>
                    Early-stage project with friends designing a robotic insect that uses{" "}
                    <a
                        href="https://www.pnas.org/doi/10.1073/pnas.2506403122"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        bristled wings
                    </a>{" "}
                    instead of membranes. Planned features include computer vision and ML-based
                    automatic routing.
                </p>
            </section>

            {/* Project 5 */}
            <section id="pfas">
                <h2>PFAS Research</h2>
                <p>
                    Collaborated with{" "}
                    <a
                        href="https://viterbi.usc.edu/directory/faculty/Pirbazari/Massoud"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dr. Massoud Pirbazari
                    </a>{" "}
                    at USC Viterbi on methodology for PFAS removal from water and air. Conducted in
                    the{" "}
                    <a
                        href="https://cee.usc.edu/research/water-quality-research-group/swan/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        SWAN Lab
                    </a>
                    .
                </p>
            </section>

            {/* Project 6 */}
            <section id="formulae">
                <h2>USC Formula E</h2>
                <p>
                    - Designed and coded full dashboard interface using Arduino C++ <br />
                    - Debugged and maintained GEVCU code <br />
                    - Devised and ran tests for CAN bus and motor cooling systems <br />
                    <br />
                    Source:{" "}
                    <a
                        href="https://github.com/SCFormulaElectric/dashboard_2024-2025"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Dashboard Repo
                    </a>{" "}
                    |{" "}
                    <a
                        href="https://github.com/SCFormulaElectric/gevcu-2024-2025"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GEVCU Repo
                    </a>
                </p>

                <CodeBlock
                    filePath="/code/dashboard.ino"
                    language="cpp"
                    title="Arduino/Teensy Dashboard Code"
                />
            </section>
        </div>
    );
};

export default Projects;
