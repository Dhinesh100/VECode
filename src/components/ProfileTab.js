import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from './Header';
import './config';
import * as firebase from 'firebase';

const gold = require('./images/goldmedal.png');
const silver = require('./images/silvermedal.png');
const bronze = require('./images/bronzemedal.png');

const ProfileTab = () => {
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
            <div className="d-flex ml-2 justify-content-around">
                <div className="d-flex flex-column">
                    
                    <h3>Personal Details</h3><br />
                            <p>
                                <b>Name:</b> {name}<br />
                                <b>DOB:</b> {dob}<br />
                                <b>Register Number:</b> {num}<br />
                                <b>Email Id:</b> {email}<br />
                                <b>Department:</b> {dept}
                                </p>
                        
                    
                            <h3>Medal Analysis</h3><br />
                            <div className="d-flex flex-row">
                                <img variant="top" src={gold} style={{width: '2.5em', height: '2.5em'}} alt='Gold Medal' />
                                <h3 className="ml-3">{goldscore}</h3>
                            </div>
                            <div className="d-flex flex-row mt-4">
                                <img variant="top" src={silver} style={{width: '2.5em', height: '2.5em'}} alt='Silver Medal' />
                                <h3 className="ml-3">{silverscore}</h3>
                            </div>
                            <div className="d-flex flex-row mt-4">
                                <img variant="top" src={bronze} style={{width: '2.5em', height: '2.5em'}} alt='Bronze Medal' />
                                <h3 className="ml-3">{bronzescore}</h3>
                            </div>
                    
                            <h3>Languages Known</h3><br />
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
                            
                            <Button variant="primary" className='mr-2' onClick={addLang}>Add Language</Button><br />
                            <Button variant="warning" className='mr-2' onClick={clear}>Clear Selection</Button><br /><br />
                            <Button variant="dark" className='mr-2' onClick={saveLang}>Publish</Button><br />
                    <Button variant="secondary" className='mr-2' onClick={signOut}>Sign Out</Button><br />
                    <Button variant="danger" className='mr-2' onClick={deleteAccount}>Delete Account</Button><br /><br />
                            
                </div>
            </div>
        </div>
    );
}

export default ProfileTab;