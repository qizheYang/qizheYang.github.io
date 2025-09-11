import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
    return (
        <div className="profile-grid">
            {/* Left Island */}
            <div className="island left-island">
                <img
                    src="/img/my_img.jpg"
                    alt="Qizhe Yang"
                    className="profile-img-square"
                />
                <h1>Qizhe Yang</h1>
                <p className="motto">Virtue Bears All Things</p>
            </div>

            {/* Middle Island */}
            <div className="island mid-island">
                <section className="about-section">
                    <h2>Welcome</h2>
                    <p>
                        Motivated, enthusiastic, and hard-working undergraduate Computer
                        Science student at the University of Southern California.
                    </p>
                    <p>
                        Skilled at analyzing intersections between Computer Science and
                        other fields. Strong communication and teamwork abilities.
                    </p>
                </section>

                <section className="academics-section">
                    <h2>Academic Background</h2>
                    <p>
                        Junior, Viterbi School of Engineering – Computer Science <br />
                        Minor: 3-D Animation at School of Cinematic Arts <br />
                        GPA: 3.64
                    </p>

                    <h3>Courses Completed</h3>
                    <ul>
                        <li>Introduction to Programming (C++)</li>
                        <li>Data Structures and Object Oriented Design</li>
                        <li>Calculus</li>
                        <li>Linear Algebra and Linear Differential Equations</li>
                        <li>Fundamentals of Physics</li>
                        <li>Probability Theory</li>
                        <li>Introduction to Algorithms and Theory of Computing</li>
                        <li>
                            Principles of Software Development (Java, HTML, CSS, JavaScript,
                            SQL)
                        </li>
                        <li>Introduction to 3-D Computer Animation (Maya)</li>
                    </ul>

                    <h3>Courses in Progress</h3>
                    <ul>
                        <li>Computer Graphics (OpenGL)</li>
                        <li>Introduction to Artificial Intelligence (Python)</li>
                        <li>Computer Systems (C, Assembly)</li>
                    </ul>
                </section>

                <section className="internship-section">
                    <h2>Internship</h2>
                    <p>
                        Completed internship at{" "}
                        <a
                            href="https://huntington.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Huntington
                        </a>{" "}
                        in San Marino, CA (May 19 – July 25, 2025).
                    </p>
                    <ul>
                        <li>
                            Worked on interdisciplinary projects, including{" "}
                            <Link to="/projects">Shadow Walker The Huntington</Link>, ArcGIS
                            Web Maps, Dashboards, and Story Maps.
                        </li>
                        <li>
                            Built an automated Python script for ArcGIS link verification.
                        </li>
                        <li>Attended Esri User Conference 2025.</li>
                    </ul>
                    <div className="img-gallery">
                        <div>
                            <img src="/img/uc25_name.jpg" alt="My name tag at UC25" />
                            <p className="img-desc">My name tag at UC25</p>
                        </div>
                    </div>
                    <p>
                        Supported by The Huntington and USC Dornsife Career Pathways'
                        Gateway Program.
                    </p>
                </section>
            </div>

            {/* Right Island */}
            <div className="island right-island contact-box">
                <h2>Contact</h2>
                <p>
                    <a href="mailto:yangqizhex@gmail.com">yangqizhex@gmail.com</a>
                    <br />
                    <a href="mailto:yangchar@usc.edu">yangchar@usc.edu</a>
                </p>

                <h2>Social</h2>
                <p>
                    <a
                        href="https://www.linkedin.com/in/qizhe-yang/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <br />
                    <a
                        href="https://github.com/qizheyang"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Index;
