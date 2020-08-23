import React from 'react';
import Header from './Header';

const AboutTab = () => {
    return (
        <div>
            <Header />
            <div className="d-flex justify-content-around">
                <div className="d-flex flex-column align-items-center ml-2 mr-2">
                    <h3>Coders' Club</h3>
                    <p>Coders' club is a hub for ehancing and exhibiting programming acuity. we strive    
                        to foster a healthy coding atmosphere in the college.</p>
                    <h3>What we do?</h3>
                    <p>Every week we conduct a programming contest ttled "VEC Weekly Code Challenge".<br /><br />
                        The top 10 students in the leader board will be encouraged and appreciated for their effort.<br /><br />
                        We also organise Hackathons and Codeathons.<br /><br />
                        We teach programming through "EVOLVE".</p>
                    <h3>VECode</h3>
                    <p>This is an initiative by the Coders' Club to develop a coding community among students.
                        It also acts as a knowledge sharing platform.</p>                
                </div>
            </div>
        </div>
    );
}

export default AboutTab;