import React from 'react';
import Header from './Header';
import Hackerrank from './Hackerrank';
import Services from './Services';
import Contact from './Contact';
import Enhance from './Enhance';
import Insights from './Insights';
import Topskills from './Topskills';
import Development from './Development';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hackerrank />
            <Enhance />
            <Insights />
            <Services />
            <Topskills />
            <Development />
        </div>
    );
}

export default HomePage;