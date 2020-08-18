import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const android = require('./images/android.png');
const ai = require('./images/artificial.png');
const backend = require('./images/backend.png');
const iot = require('./images/iot.png');
const ml = require('./images/ml.png');
const security = require('./images/security.png');
const web = require('./images/web.png');

function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? "👉" : "👈";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
}

const redirect = (url) => {
    window.location=url;
}
  
const Topskills = () => {
    const topskills = () =>
        [[android, 'Android', 'https://developer.android.com/training/basics/firstapp'], [ai, 'Artificial Intelligence', 'https://www.tutorialspoint.com/artificial_intelligence/index.htm'], 
        [backend, 'Backend Developer', 'https://www.guru99.com/what-is-backend-developer.html'], 
        [iot, 'Internet Of Things', 'https://www.tutorialspoint.com/internet_of_things/index.htm'], [ml, 'Machine Learning', 'https://www.tutorialspoint.com/machine_learning_with_python/index.htm'],
         [security, 'Cyber Security', 'https://www.javatpoint.com/cyber-security-tutorial'], [web, 'Web Development', 'https://www.tutorialspoint.com/website_development/index.htm']].map(topskill => (
            <div className="d-flex align-items-center flex-column">
                <img src={topskill[0]} onClick={() => redirect(topskill[2])} alt="logo" width="100px" height="100px"></img>
                <h3 style={{color: 'white'}}>{topskill[1]}</h3>
            </div>
        ));

    return (
        <div><br />
            <div style={{backgroundColor: '#A329F7', justifyContent: 'center', textAlign: 'center'}}>
                <h2 className="text-align-center" style={{color: 'white'}}>Top Skills</h2>
                <Slider nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                    dots={true}>{topskills()}
                </Slider>
            </div>
        </div>
  );
}

export default Topskills;