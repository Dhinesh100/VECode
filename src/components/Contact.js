import React from 'react';
import image from './images/contact-us.webp';
import { Button } from 'react-bootstrap';
import Header from './Header';

var topSpot = {
    width: "100%",
    height: "500px",
    backgroundSize: "cover",
    backgroundImage: `url(${image})`,
    overflow: "hidden"
};

const Contact = () => {
    return (
        <div>
            <div style={topSpot}>
                <Header />
                <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
                    <div><h1>We'd love to hear from you</h1></div>
                    <div><p style={{marginLeft: '15%', marginRight: '15%', textAlign: 'center'}}>Whether you have a question about courses, tutorials, platforms, challenges, features 
                        of VECode, or anythin else, our team is ready to answer you</p></div>
                    <div><a href="contact#getintouch"><Button>GET IN TOUCH</Button></a></div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div><h4>Featured Collections</h4>
                    <hr style={{backgroundColor: 'yellow', height: '2px', width: '30%'}}></hr>
                </div>
            </div>
            <div className="ml-5 mr-5 d-flex justify-content-around">
                    <div>
                        <h3>Top Skills</h3>
                        <small>Machine Learning</small><br />
                        <small>Web Development</small><br />
                        <small>Internet Of Things</small><br />
                        <small>Cyber Security</small><br />
                        <small>Artificial Intelligence</small>
                    </div>
                    <div>
                        <h3>Evolve</h3>
                        <small>Programming Languages</small><br />
                        <small>Data Structures And Algorithms</small><br />
                        <small>Web Development</small><br />
                        <small>Android Development</small><br />
                        <small>Machine Learning</small>
                    </div>
                    <div>
                        <h3>Languages</h3>
                        <small>Python</small><br />
                        <small>C Programming</small><br />
                        <small>C++</small><br />
                        <small>Java</small><br />
                        <small>Javascript</small>
                    </div>
                </div><br /><br />
                <div className="ml-3 mr-3 d-flex flex-row" id="getintouch">
                    <div style={{width: '100%'}}>
                        <h3>Get in Touch</h3>
                        <p>Please fill out the quick form and we will be in touch with you with lightening speed</p>
                        <form>
                            <input type="text" placeholder="Name" style={{width: '90%', height: '50px', fontSize: '30px'}} /><br /><br />
                            <input type="password" placeholder="Password" style={{width: '90%', height: '50px', fontSize: '30px'}} /><br /><br />
                            <textarea type="text" placeholder="Message" style={{width: '90%', height: '200px', fontSize: '30px'}} /><br /><br />
                            <input type="submit" value="SUBMIT" style={{width: '30%', height: '50px', fontSize: '30px', color: 'white', backgroundColor: 'blueviolet'}} /><br /><br />
                        </form>
                    </div>
                    <div className='ml-5'>
                        <div style={{marginLeft: '30%'}}>
                            <h5>Coder's Club</h5>
                            <p>Coders' club is a hub for ehancing and exhibiting programming acuity. we strive to foster a healthy coding atmosphere in the college.</p><br /><br /><b />
                            <h5>VECode</h5>
                            <p>This is an initiative by the Coders' Club to develop a coding 
                                community among students. It also acts as a knowledge sharing platform.</p><br /><br /><b />
                            <h5>Evolve</h5>
                            <p>In this program, we provide tutorials on various programming 
                                languages and domain for the students to learn and inprove their skillset</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Contact;