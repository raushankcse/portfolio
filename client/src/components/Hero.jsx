import React from "react";
import './Hero.css';

const Hero = () => {
    return(
        <div className="hero">
            <img src="/images/raushan.jpg" alt="Raushan Kumar" className="hero-image" />
            <h1 className="hero-title">Hi, I'm Raushan Kumar</h1>
            <p className="hero-subtite">Software Engineer</p>
        </div>
    );
};

export default Hero;