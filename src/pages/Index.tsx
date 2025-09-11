import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
    return (
        <div className="profile-grid">
            {/* Left Island */}
            <div className="island left-island">
                <img src="/img/my_img.jpg" alt="Qizhe Yang" className="profile-img-square" />
                <h1>Qizhe Yang</h1>
                <p className="motto">Virtue Bears All Things</p>
            </div>

            {/* Middle Island */}
            <div className="island mid-island">
                <h2>Thank you for viewing 1111111</h2>
                <p>
                    Motivated, Enthusiastic, Hard-Working undergraduate Computer Science student
                    at University of Southern California. <br /> <br />
                    Analyzing and Researching intersecting Computer Science and other science.
                    Strong communication and teamwork skills.
                </p>

                <h2>Additional Academic Information</h2>
                <p>
                    University of Southern California Viterbi School of Engineering Computer Science Junior <br />
                    Minor in 3-D Animation in Cinematic Arts at School of Cinematic Arts <br />
                    Unweighted GPA: 3.64 <br />
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
                    <li>Principles of Software Development (Java, HTML, CSS, JavaScript, SQL)</li>
                    <li>Introduction to 3-D Computer Animation (Maya)</li>
                </ul>

                <h3>Courses in Progress</h3>
                <ul>
                    <li>Computer Graphics (OpenGL)</li>
                    <li>Introduction to Artificial Intelligence (Python)</li>
                    <li>Computer Systems (C, Assembly)</li>
                </ul>

                <h2>Internship</h2>
                <p>
                    I had completed an internship at{" "}
                    <a href="https://huntington.org" target="_blank" rel="noopener noreferrer">
                        The Huntington
                    </a>{" "}
                    in San Marino, CA from May 19, 2025 to July 25, 2025. <br /> <br />
                    Worked on interdisciplinary projects, including{" "}
                    <Link to="/projects">Shadow Walker The Huntington</Link>, ArcGIS Web Map,
                    Dashboard and Story Map, and an automatic Python script for ArcGIS link verification. <br /> <br />
                    Also attended the Esri User Conference 2025. <br /> <br />
                    <div className="img-gallery">
                        <div>
                            <img src="/img/uc25_name.jpg" alt="My name tag at UC25" />
                            <p className="img-desc">My name tag at UC25</p>
                        </div>
                    </div>
                    Supported by The Huntington and USC Dornsife Career Pathways' Gateway Program.
                </p>
            </div>

            {/* Right Island */}
            <div className="island right-island contact-box">
                <h2>Contact</h2>
                <p>
                    <a href="mailto:yangqizhex@gmail.com">yangqizhex@gmail.com</a> <br />
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
                    </a>{" "}
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
