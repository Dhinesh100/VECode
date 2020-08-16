import React from 'react';
import bg from './images/background.webp';
import { Button } from 'react-bootstrap';

var sectionStyle = {
    width: "100%",
    height: "700px",
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
                            <h1 style={{color: 'white', fontSize: '45px'}}>Welcome To VECode</h1>
                            <h3 style={{color: 'white'}} className="together">Let's Study Together</h3>
                            <Button variant="primary" onClick={() => props.onWelcome()}>Get Started</Button>
                        </div>
                        <p className="m-3" style={{color: "white", textAlign: "center"}}>For any queries, kindly WhatsApp to 9524981913</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Welcome;