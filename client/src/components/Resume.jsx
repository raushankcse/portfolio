import React from "react";
import './Resume.css';

const Resume = () =>{
    return (
        <section className="resume">
            <h2>Resume</h2>
            <p>You can view or download my resume below:</p>
            <div className="resume-actions">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-download">Download Resume</a>

            </div>
            <div className="resume-preview">
                <iframe src="/resume.pdf" title="Resume" className="resum-iframe" ></iframe>

            </div>

        </section>
    );
};

export default Resume;