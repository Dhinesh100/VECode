import React from 'react';

const book = require('./images/book.jpeg');

const Services = () => {
    return (
        <div className="mt-1">
            <h2 className="ml-2">Sevices</h2>
            <div className="ml-2 mr-2 d-flex fd">
                <div>
                    <img src={book} alt="book" width="130px" height="130px" />
                </div>{' '}
                <div>
                    <h3>Competitive Learning</h3>
                    <p>Provides a healthy competitive learning platform, a year-wise medal based leaderboard 
                        is maintained, so that he/she can visualize their 
                        improvement among their peers. The medals will be given based on their 
                        performances in weekly code challenges, hackathons, and other coding events.</p>
                </div>
            </div>
            <div className="ml-2 mr-2 d-flex fd">
                <div>
                    <img src={book} alt="book" width="130px" height="130px" />
                </div>{' '}
                <div>
                    <h3>Learn By Doing</h3>
                    <p>Practice during lessons, practice between lessons, practice whenever you can. 
                        Master the task, then reinforce and test your 
                        knowledge with fun, hands-on exercises and interactive quizzes.</p>
                </div>
            </div>
            <div className="ml-2 mr-2 d-flex fd">
                <div>
                    <img src={book} alt="book" width="130px" height="130px" />
                </div>{' '}
                <div>
                    <h3>Unbound Learning</h3>
                    <p>Don’t limit yourself! Now there are no limits – no more set locations, 
                        time, or pace! You decide where, when, and how quickly 
                        you’ll learn, and you can do it anytime, anywhere, on any device.</p>
                </div>
            </div>
            <div className="ml-2 mr-2 d-flex fd">
                <div>
                    <img src={book} alt="book" width="130px" height="130px" />
                </div>{' '}
                <div>
                    <h3>Learn While Playing</h3>
                    <p>Learning should be fun. Develop your profile, unlock each 
                        level, earn skill points and achievements, 
                        and challenge yourself by competing with other learners throughout the college.</p>
                </div>
            </div>
            <div className="ml-2 mr-2 d-flex fd">
                <div>
                    <img src={book} alt="book" width="130px" height="130px" />
                </div>{' '}
                <div>
                    <h3>Crowd-Learning</h3>
                    <p>Learning has never been this social and accessible for so many! 
                        Bit-sized lessons and fun practice sessions grab your 
                        attention and keep you focused, for guaranteed best results!</p>
                </div>
            </div>
        </div>
    );
}

export default Services;