import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Header from './Header';
import './config';
import * as firebase from 'firebase';

const gold = require('./images/goldmedal.png');
const silver = require('./images/silvermedal.png');
const bronze = require('./images/bronzemedal.png');

const Profile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [dept, setDept] = useState("");
    const [goldscore, setGoldscore] = useState("");
    const [silverscore, setSilverscore] = useState("");
    const [bronzescore, setBronzescore] = useState("");
    const [lang, setLang] = useState("Python");
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);
   
    var tot=0;
    var data = []

    firebase
        .database()
        .ref("Users")
        .once("value")
        .then((snapshot) => {
            tot = snapshot.child(num).child('totalLanguages').val();
            for(var i=0; i<tot; i++) {
                var temp = snapshot.child(num).child('languages').child(i).val();
                localStorage.setItem('lan'+i, temp)
            }
            setTotal(tot)
        })

            var i=0
            for(; i<total; i++) {
                data.push(localStorage.getItem('lan'+i))   
            }

    var num = localStorage.getItem("number");
    firebase
        .database()
        .ref("Users")
        .once("value")
        .then(function(snapshot) {
            var details = snapshot.child(num).val();
            setName(details.name);
            setEmail(details.email);
            setDob(details.dob);
            setDept(details.department);
            setGoldscore(details.gold);
            setSilverscore(details.silver);
            setBronzescore(details.bronze);
        });

        function signOut() {
            localStorage.setItem("welcome", "true");
            localStorage.setItem("login", "false");
            localStorage.setItem("signup", "false");
            localStorage.setItem("register", "false");
            localStorage.setItem("home", "false");
            localStorage.removeItem("number");
            window.location="/";
        }

        function deleteAccount() {
            localStorage.setItem("welcome", "true");
            localStorage.setItem("login", "false");
            localStorage.setItem("signup", "false");
            localStorage.setItem("register", "false");
            localStorage.setItem("home", "false");
            localStorage.removeItem("register");
            localStorage.removeItem("number");
            firebase.database().ref(`Users/${num}`).remove();
            window.location="/";
        }

        function addLang()  {
            if(items.some(item => item.value === lang)) {
                alert('Language already selected')
                return
            }
            setItems([...items, {
                id: items.length,
                value: lang
            }]);
            setTotal(0)
        }

        function clear() {
            setItems([])
        }

        function saveLang() {
            firebase
                .database()
                .ref("Users")
                .child(num)
                .update({
                    languages: items.map(item => item.value),
                    totalLanguages: items.length
                })

                setItems([])
            
            alert('Successfully saved the languages in the database');
        }

    return (
        <div>
            <Header />
            <div className="d-flex justify-content-around">
                <div className="d-flex flex-column align-items-center">
                    <Card style={{ width: '40rem' }} className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                        <Card.Body>
                            <Card.Header>Personal Details</Card.Header><br />
                            <Card.Text>
                                <b>Name:</b> {name}<br />
                                <b>DOB:</b> {dob}<br />
                                <b>Register Number:</b> {num}<br />
                                <b>Email Id:</b> {email}<br />
                                <b>Department:</b> {dept}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '40rem' }} className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                        <Card.Body>
                            <Card.Header>Medal Analysis</Card.Header><br />
                            <div className="d-flex flex-row">
                                <Card.Img variant="top" src={gold} style={{width: '2.5em', height: '2.5em'}} />
                                <h3 className="ml-3">{goldscore}</h3>
                            </div>
                            <div className="d-flex flex-row mt-4">
                                <Card.Img variant="top" src={silver} style={{width: '2.5em', height: '2.5em'}} />
                                <h3 className="ml-3">{silverscore}</h3>
                            </div>
                            <div className="d-flex flex-row mt-4">
                                <Card.Img variant="top" src={bronze} style={{width: '2.5em', height: '2.5em'}} />
                                <h3 className="ml-3">{bronzescore}</h3>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '40rem' }} className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
                        <Card.Body>
                            <Card.Header>Languages Known</Card.Header><br />
                            <select className="p-2" type="text" value={lang} onChange={event => setLang(event.target.value)}>
                                <option name="python">Python</option>
                                <option name="c">C</option>
                                <option name="c++">C++</option>
                                <option name="java">Java</option>
                                <option name="ruby">Ruby/Ruby on Rails</option>
                                <option name="html">HTML</option>
                                <option name="javascript">Javascript</option>
                                <option name="c#">C#</option>
                                <option name="objective c">Objective C</option>
                                <option name="php">PHP</option>
                                <option name="sql">SQL</option>
                                <option name="swift">Swift</option>
                            </select><br /><br />
                            <big>Languages present in database</big>
                            <ul>
                                {
                                    data.map(item => (
                                        <li>{item}</li>
                                    ))
                                }
                            </ul>
                            <hr style={{backgroundColor: 'black'}} />
                            <big>Replace with the following languages</big>
                            <ul>
                                {
                                    items.length===0 ?
                                    <small><b>Kindly select a language before publishing</b></small> :
                                    items.map(item => (
                                        <li key={item.id}>{item.value}</li>
                                    ))
                                }
                            </ul>
                            <Button variant="primary" onClick={addLang}>Add Language</Button>{' '}
                            <Button variant="warning" onClick={clear}>Clear Selection</Button><br /><br />
                            <Button variant="dark" onClick={saveLang}>Publish</Button>
                        </Card.Body>
                    </Card>
                    <Button variant="secondary" onClick={signOut} className="d-flex align-items-center">Sign Out</Button><br />
                    <Button variant="danger" onClick={deleteAccount} className="d-flex align-items-center">Delete Account</Button><br /><br />
                </div>
            </div>
        </div>
    );
}

export default Profile;