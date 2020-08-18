import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const raspberry = require('./images/raspberry.png');
const android = require('./images/android.png');
const quantum = require('./images/quantum.png');
const supervised = require('./images/supervised.png');

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

const redirect = () => {
    alert('Yet to be posted');
}
  
const Insights = () => {
    const insights = () =>
        [[raspberry, 'Raspberry pi Connection Setup'], [android, 'MVVM Architecture'], [quantum, 'Quantum Computing, Our New Reality'], [supervised, 'Intro To Supervised Learning']].map(insight => (
            <div className="d-flex align-items-center flex-column">
                <img src={insight[0]} onClick={redirect} alt="logo" width="100px" height="100px"></img>
                <h3 style={{color: 'white'}}>{insight[1]}</h3>
            </div>
        ));

    return (
        <div><br />
            <div style={{backgroundColor: '#88898A', justifyContent: 'center', textAlign: 'center'}}>
                <h2 className="text-align-center" style={{color: 'white'}}>Insights</h2>
                <Slider nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                    dots={true}>{insights()}
                </Slider>
            </div>
        </div>    
    );
}

export default Insights;