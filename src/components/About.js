import React from 'react';

const book = require('./images/book.jpeg');

const About = () => {
    return (
        <div>
            <h2 className="text-center">Coder's Club</h2>
            <div className="ml-5 mr-5">
                <div className="ml-2 abt mr-2 d-flex fd">
                    <div>
                        <img src={book} alt="book" width="130px" height="130px" />
                    </div>{' '}
                    <div>
                        <p>Coder's club is an hub for enhancing and exhibiting programming acuity. 
                            We strive to foster a healthy coding atmosphere in the college.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;