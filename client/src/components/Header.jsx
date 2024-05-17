import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className="header-container">
                <h1>Raushan Kumar</h1>
                <nav className="nav">
                    <ul className="nav-list"> 
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>

                </nav>

            </div>
        </header>
    );
};


export default Header;