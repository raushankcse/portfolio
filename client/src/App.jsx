import React from 'react';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ProfessionalExperience from './components/ProfessionalExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () =>  {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <ProfessionalExperience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
