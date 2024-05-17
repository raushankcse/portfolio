import React from "react";
import './ProfessionalExperience.css';

const ProfessionalExperience = () =>{
    return (
        <section className="professional-experience">
            <h2>Professional Experience</h2>
            <div className="experience-list">
                <div className="experience-item">
                    <h3>Full Stack Developer at Decent Designs</h3>
                    <p><em>Muzaffarpur</em> | <em>March 2023</em></p>
                    <ul>
                        <li>Understand the client requirement</li>
                        <li>Build UI and Write Backend logic for each features</li>
                        <li>Deploy the project and showcase the functionality</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};


export default ProfessionalExperience;