import React from 'react';
import { Card } from 'react-bootstrap';

const gold = require('./images/goldmedal.png');
const silver = require('./images/silvermedal.png');
const bronze = require('./images/bronzemedal.png');

const Info = () => {
    
    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '25em' }} className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Header>
                    MEDALS
                </Card.Header><br />
                <div className="d-flex justify-content-around">
                    <Card.Img variant="top" src={gold} style={{width: '3.5em', height: '3.5em'}} />
                </div>
                <Card.Body>
                    <Card.Text>
                        The Gold Medal has a weightage of 100 points. It will be awarded to the top 3 contestants
                        in events like Codeathons and Hackathons.
                    </Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-around">
                    <Card.Img variant="top" src={silver} style={{width: '3.5em', height: '3.5em'}} />
                </div>
                <Card.Body>
                    <Card.Text>
                        The Silver Medal is worth 10 points. It will be presented to students in the top 5 positions
                        in the Weekly Code Challenge.
                    </Card.Text>
                </Card.Body>
                <div className="d-flex justify-content-around">
                    <Card.Img variant="top" src={bronze} style={{width: '3.5em', height: '3.5em'}} />
                </div>
                <Card.Body>
                    <Card.Text>
                        The Bronze Medal has a value of 1 point. It will be
                        presented to students solving the daily MCQ.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Info;