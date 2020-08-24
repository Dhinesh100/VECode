import React from 'react';
import About from './Aboutus';
import AboutTab from './AboutTab';

const AboutPage = () => {
    if (window.outerWidth <= 800) {
        return <AboutTab />
    } else {
        return <About />
    }
}

export default AboutPage;