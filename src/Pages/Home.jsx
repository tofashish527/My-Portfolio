import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';

const Home = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        </div>
    );
};

export default Home;