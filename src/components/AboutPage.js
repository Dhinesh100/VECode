import React from 'react';
import About from './Aboutus';
import AboutTab from './AboutTab';

const InfoPage = () => {
    if (window.outerWidth <= 768) {
        return <AboutTab />
    } else {
        return <About />
    }
}

export default InfoPage;