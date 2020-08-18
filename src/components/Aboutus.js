import React from 'react';
import { Card } from 'react-bootstrap';

const Aboutus = () => {
    
    return (
        <div className="d-flex justify-content-around">
            <div className="d-flex flex-column">
                <Card style={{ width: '45rem' }} className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Body>
                        <Card.Title>Coders' Club</Card.Title>
                        <Card.Text>
                            Coders' club is a hub for ehancing and exhibiting programming acuity. we strive    
                            to foster a healthy coding atmosphere in the college.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '45rem' }} className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Body>
                        <Card.Title>What we do?</Card.Title>
                        <Card.Text>
                            Every week we conduct a programming contest ttled "VEC Weekly Code Challenge".<br /><br />
                            The top 10 students in the leader board will be encouraged and appreciated for their effort.<br /><br />
                            We also organise Hackathons and Codeathons.<br /><br />
                            We teach programming through "EVOLVE".
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '45rem' }} className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <Card.Body>
                        <Card.Title>VECode</Card.Title>
                        <Card.Text>
                            This is an initiative by the Coders' Club to develop a coding community among students.
                            It also acts as a knowledge sharing platform.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Aboutus;