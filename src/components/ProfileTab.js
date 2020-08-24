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
    // const [lang, setLang] = useState("Python");
    // const [items, setItems] = useState([]);
   
    // var data = [];

    // const fetchData = () => {
    //     firebase
    //         .database()
    //         .ref("Users")
    //         .once("value")
    //         .then(function(snapshot) {
    //             var total = snapshot.child(num).child('totalLanguages').val();
    //             snapshot.forEach(item => {
    //                 var temp = item.val().languages;
    //                 data.push(temp);
    //                 console.log(data)
    //                 return false;
    //             })
    //             // for(var i=0; i<total; i++) {
    //             //     data.map(item => (
    //             //         setItems([... items, {
    //             //             id: i,
    //             //             value: item.languages[i]
    //             //         }])
    //             //     ))
    //             // }

    //             for(var i=0; i<total; i++) {
    //                 setItems([...items, {
    //                     id: items.length,
    //                     value: data[0][i]
    //                 }])
    //             }
    //         })
    // }

    // function load(total, data) {
    //     // data.map(item => (
    //     //     setItems([...items, {
    //     //         id: i,
    //     //         value: item.languages[0]
    //     //     }], console.log(i))
    //     // ))
    //     // if(i<total-1) {
    //     //     load(total, data, ++i);
    //     // }
    // }

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

    //     function addLang()  {
    //         setItems([... items, {
    //             id: items.length,
    //             value: lang
    //         }]);
    //     }

    //     function saveLang() {
    //         firebase
    //             .database()
    //             .ref("Users")
    //             .child(num)
    //             .update({
    //                 languages: items.map(item => (item.value)),
    //                 totalLanguages: items.length
    //             })
            
    //         alert('Successfully saved the languages in the database');
    //     }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <div>
            <Header />
            <div className="ml-2 d-flex justify-content-around">
                <div className="d-flex flex-column align-items-center">
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
                        <img variant="top" src={gold} style={{width: '2.5em', height: '2.5em'}} alt="Gold Medal" />
                        <h3 className="ml-3">{goldscore}</h3>
                    </div>
                    <div className="d-flex flex-row mt-4">
                        <img variant="top" src={silver} style={{width: '2.5em', height: '2.5em'}} alt="Silver Medal" />
                        <h3 className="ml-3">{silverscore}</h3>
                    </div>
                    <div className="d-flex flex-row mt-4">
                        <img variant="top" src={bronze} style={{width: '2.5em', height: '2.5em'}} alt="Bronze Medal" />
                        <h3 className="ml-3">{bronzescore}</h3>
                    </div>
                    {/* <Card style={{ width: '40rem' }} className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
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
                            <ol>
                                {
                                    items.map(item => (
                                        <li key={item.id}>{item.value}</li>
                                    ))
                                }
                            </ol>
                            <Button variant="primary" onClick={fetchData}>Display Known Languages</Button>{' '}
                            <Button variant="primary" onClick={addLang}>Add Language</Button><br /><br />
                            <Button variant="dark" onClick={saveLang}>Publish</Button>
                        </Card.Body>
                    </Card> */}
                    <Button variant="secondary" onClick={signOut} className="d-flex align-items-center">Sign Out</Button><br />
                    <Button variant="danger" onClick={deleteAccount} className="d-flex align-items-center">Delete Account</Button><br /><br />
                </div>
            </div>
        </div>
    );
}

export default ProfileTab;