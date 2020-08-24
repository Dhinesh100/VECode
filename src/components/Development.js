import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const design = require('./images/designpatterns.png');
const algo = require('./images/algorithms.jpeg');
const ds = require('./images/datastructure.png');
const github = require('./images/github.png');
const stackoverflow = require('./images/stackoverflow.png');

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
  
const Development = () => {
    const development = () =>
        [[design, 'Deisgn Patterns', 'https://www.coursera.org/learn/design-patterns'], [algo, 'Algorithms', 'https://www.coursera.org/search?query=algorithms&'], 
        [ds, 'Data Structures', 'https://www.coursera.org/learn/data-structures'], 
        [github, 'Github', 'https://github.com/'], [stackoverflow, 'Stack Overflow', 'https://stackoverflow.com/']].map(development => (
            <div className="d-flex align-items-center flex-column">
                <img src={development[0]} onClick={() => redirect(development[2])} alt="logo" width="100px" height="100px"></img>
                <h3 style={{color: 'white'}}>{development[1]}</h3>
            </div>
        ));

    return (
        <div><br />
            <div style={{backgroundColor: '#F8270D', justifyContent: 'center', textAlign: 'center'}}>
                <h2 className="text-align-center" style={{color: 'white'}}>Development Essentials</h2>
                <Slider nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                    dots={true}>{development()}
                </Slider>
            </div><br /><br />
        </div>
  );
}

export default Development;