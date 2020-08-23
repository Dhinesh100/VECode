import React from 'react';
import Header from './Header';

const gold = require('./images/goldmedal.png');
const silver = require('./images/silvermedal.png');
const bronze = require('./images/bronzemedal.png');

const InfoTab = () => {
    return (
        <div>
            <Header />
            <div className="d-flex justify-content-around flex-column align-items-center ml-2 mr-2">
                <h3 textAlign="center">MEDALS</h3><br />
                <div className="d-flex justify-content-around">
                    <img src={gold} style={{width: '3.5em', height: '3.5em'}} />
                </div>
                <p>The Gold Medal has a weightage of 100 points. It will be awarded to the top 3 contestants
                    in events like Codeathons and Hackathons.</p>
                <div className="d-flex justify-content-around">
                    <img variant="top" src={silver} style={{width: '3.5em', height: '3.5em'}} />
                </div>
                <p>The Silver Medal is worth 10 points. It will be presented to students in the top 5 positions
                    in the Weekly Code Challenge.</p>
                <div className="d-flex justify-content-around">
                    <img variant="top" src={bronze} style={{width: '3.5em', height: '3.5em'}} />
                </div>
                <p>The Bronze Medal has a value of 1 point. It will be
                    presented to students solving the daily MCQ.</p>
            </div>
        </div>
    );
}

export default InfoTab;