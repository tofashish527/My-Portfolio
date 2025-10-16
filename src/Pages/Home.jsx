import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
        </div>
    );
};

export default Home;