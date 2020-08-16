import React, {useState} from 'react';
import './config';
import { Button } from 'react-bootstrap';
import * as firebase from 'firebase';

var CryptoJS = require("crypto-js");

const Login = (props) => {

    const [number, setNumber] = useState("");
    const [pass, setPass] = useState("");
    const [progress, setProgress] = useState(0);

    const verify = e => {
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
        firebase
            .database()
            .ref("Users")
            .once("value")
            .then(function(snapshot) {
                var a = snapshot.child(number).exists()
                if(a===true) {
                    firebase
                        .database()
                        .ref("Users")
                        .once("value")
                        .then(function(snapshot) {
                            var b = snapshot.child(number).val()
                            var bytes = CryptoJS.AES.decrypt(b.password, 'vecode@07');
                            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                            if(decryptedData===pass) {
                                props.HomeScreen();
                            } else {
                                setProgress(0);
                                alert(`Password is incorrect`);
                            }
                        });        
                } else {
                    setProgress(0);
                    alert(`${number} does not exist`);
                }
            });
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
                <h4 style={{fontSize: '40px', color: 'pink'}}>SIGN IN</h4>
            </div>
            <div className="h-90">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="text-center">
                                <form onSubmit={verify}>
                                    <input style={{borderRadius: "20px", borderWidth: "2px", borderColor: "red", outline: "none"}} className="p-2" type="text" placeholder="Register Number" value={number} onChange={event => setNumber(event.target.value.trim())} /><br /><br />
                                    <input style={{borderRadius: "20px", borderWidth: "2px", borderColor: "red", outline: "none"}} className="p-2" type="password" placeholder="Password" value={pass} onChange={event => setPass(event.target.value)} /><br /><br />
                                    <Button variant="primary" className="pl-5 pr-5" type="submit">SIGN IN</Button>
                                </form><br />
                                <Button variant="light" onClick={() => props.onSignup()} className="pl-5 pr-5">SIGN UP</Button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Login;