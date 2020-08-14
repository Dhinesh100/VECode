import React from 'react';
import bg from './images/background.webp';
import { Button } from 'react-bootstrap';

var sectionStyle = {
    width: "100%",
    height: "625px",
    backgroundSize: "cover",
    backgroundImage: `url(${bg})`,
    overflow: "hidden"
};

const Welcome = (props) => {

    return (
        <section style={sectionStyle}>
            <div className="h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="text-center">
                            <h1 style={{color: 'white'}}>Welcome To VECode</h1>
                            <h3 style={{color: 'white'}}>Let's Study Together</h3>
                            <Button variant="primary" onClick={() => props.onWelcome()}>Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;