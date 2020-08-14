import React, {useState} from 'react';
import './config';
import { Button } from 'react-bootstrap';
import * as firebase from 'firebase';

var CryptoJS = require("crypto-js");

const Register = (props) => {

    const [uname, setUname] = useState("")
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [dept, setDept] = useState("CSE");
    const [progress, setProgress] = useState(0);

    setUname(props.name.trim());

    const entries = e => {
        e.preventDefault();
        var i = 0;
        if (i === 0) {
            i = 1;
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                setProgress(width);
              }
            }
            setProgress(0);
        }
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (pattern.test(email)) {
            var re = /^\d{2}\/\d{2}\/\d{4}$/;
            if (re.test(dob)) {
                var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(props.pass), 'vecode@07').toString();
                firebase
                    .database()
                    .ref("Users")
                    .child(props.number)
                    .set({
                        name: uname,
                        email: email,
                        dob: dob,
                        registerNumber: props.number,
                        department: dept,
                        password: ciphertext
                    })
                    props.Home()
            } else {
                alert('Enter a valid dob in the given format');
            }
        } else {
            alert('Kindly enter a valid email address');
        }
    }

    return (
        <section className="sectionStyle">
            <div style={{width: '100%', backgroundColor: '#ddd'}} >
                <div id="prog" style={{width: progress + '%', height:'2px', backgroundColor: 'red'}} ></div>
            </div>
            <div className="p-3">
                <img
                    src="/vecode.png"
                    width="75"
                    height="30"
                    className="d-inline-block align-center"
                    alt="React Bootstrap logo"
                />
                <h4 style={{color: 'pink'}}>SIGN UP</h4>
            </div>
            <div className="h-90">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="text-center">
                                <form onSubmit={entries}>
                                    <input style={{borderRadius: "20px", borderWidth: "2px", borderColor: "red", outline: "none"}} className="p-2" type="text" placeholder="Email" value={email} onChange={event => setEmail(event.target.value.trim())} /><br /><br />
                                    <select style={{borderRadius: "20px", borderWidth: "2px", borderColor: "red", outline: "none"}} className="p-2" type="text" placeholder="Department" value={dept} onChange={event => setDept(event.target.value)}>
                                        <option name="cse">CSE</option>
                                        <option name="it">IT</option>
                                        <option name="ece">ECE</option>
                                        <option name="eee">EEE</option>
                                        <option name="mech">MECH</option>
                                        <option name="automobile">AUTOMOBILE</option>
                                        <option name="civil">CIVIL</option>
                                    </select><br /><br />
                                    <input style={{borderRadius: "20px", borderWidth: "2px", borderColor: "red", outline: "none"}} className="p-2" type="text" placeholder="DOB (DD/MM/YYYY)" value={dob} onChange={event => setDob(event.target.value.trim())} /><br /><br />
                                    <Button variant="primary" className="pl-5 pr-5" type="submit">SIGN UP</Button>
                                </form><br />
                                <Button variant="light" onClick={() => props.onSignin()} className="pl-5 pr-5">SIGN IN</Button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Register;