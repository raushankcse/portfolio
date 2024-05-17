import React from "react";
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-item">
                    <h3>Computer Institute Website</h3>
                    <p>Generate and verify certificate of students by 100% efficient code, node.js, express js react tech used in developing, it has login features for many types of users: admin, vendors, staff.</p>
                    <a className="link" target="_blank" href="https://institute-green.vercel.app/">Live</a>

                </div>
                <div className="project-item">
                    <h3>College Website</h3>
                    <p>build college website for all users in college by 100% mern stack, tech used mongodb. has functionality to publish notice and send mail to all students and staff.</p>
                </div>

            </div>

        </section>
    );
};


export default Projects;