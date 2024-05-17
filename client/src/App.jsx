import React from 'react';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ProfessionalExperience from './components/ProfessionalExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


const App = () =>  {

  return (
    <div className="App">
      <Header/>
      <section id='hero'>
        <Hero/>
      </section>
      <section id="about-me">
      <AboutMe/>

      </section>
      <section id="skills">
      <Skills/>

      </section>
      <section id="experience">

      <ProfessionalExperience/>
      </section>
      <section id="projects">

      <Projects/>
      </section>
      <section id="resume">

      <Resume/>
      </section>
      <section id="contact">

      <Contact/>
      </section>
      <Footer/>
    </div>
  );
};

export default App;
