import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const hackerearth = require('./images/hackerearth.png');
const geeksforgeeks = require('./images/geeksforgeeks.png');
const codewars = require('./images/codewars.jpeg');
const hackerrank = require('./images/hackerrank.jpeg');
const codechef = require('./images/codechef.png');
const topcoder = require('./images/topcoder.png');

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
  
const Enhance = () => {
    const enhance = () =>
        [[hackerearth, 'Hackerearth', 'https://www.hackerearth.com'], [geeksforgeeks, 'GeeksForGeeks', 'https://www.geeksforgeeks.org/'], [codewars, 'CodeWars', 'https://www.codewars.com'], [hackerrank, 'Hackerrank', 'https://www.hackerrank.com'],
         [codechef, 'CodeChef', 'https://www.codechef.com'], [topcoder, 'TopCoder', 'https://www.topcoder.com']].map(enhance => (
            <div className="d-flex align-items-center flex-column">
                <img src={enhance[0]} onClick={() => redirect(enhance[2])} alt="logo" width="100px" height="100px"></img>
                <h3 style={{color: 'white'}}>{enhance[1]}</h3>
            </div>
        ));

    return (
        <div><br />
            <div style={{backgroundColor: '#00ffff', justifyContent: 'center', textAlign: 'center'}}>
                <h2 className="text-align-center" style={{color: 'white'}}>Enhance Yourself</h2>
                <Slider nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                    dots={true}>{enhance()}
                </Slider>
            </div>
        </div>    
    );
}

export default Enhance;