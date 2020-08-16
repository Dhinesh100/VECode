import React, {useState} from 'react';
import './config';
import { Button } from 'react-bootstrap';
import * as firebase from 'firebase';

const Signup = (props) => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");
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
        if(pass1===pass2) {
            if (number.length===12 && isNaN(number)===false) {
                var num = parseInt(number)/100000000;
                num = Math.trunc(num);
                if (num===1132) {
                    firebase
                        .database()
                        .ref("Users")
                        .once("value")
                        .then(function(snapshot) {
                            var a = snapshot.child(number).exists()
                            if(a===true) {
                                setProgress(0);
                                alert(`${number} already exists`);
                            } else {
                                props.onVerify(name.trim(), number, pass1);
                            }
                        });
                } else {
                    setProgress(0);
                    alert('Register number is incorrect');
                }
            } else {
                setProgress(0);
                alert('Kindly enter the university register number');
            }
        } else {
            setProgress(0);
            alert('Password is not matching');
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
                <h4 style={{fontSize: '40px', color: 'pink'}}>SIGN UP</h4>
            </div>
            <div className="h-90">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="text-center">
                                <form onSubmit={verify}>
                                    <input style={{borderRadius: "20px", borderWidth: "2px", borderColor: "red", outline: "none"}} className="p-2" type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)} /><br /><br />
                                    <input style={{borderRadius: "20px", borderWidth: "2px", borderColor: "red", outline: "none"}} className="p-2" type="text" placeholder="Register Number" value={number} onChange={event => setNumber(event.target.value.trim())} /><br /><br />
                                    <input style={{borderRadius: "20px", borderWidth: "2px", borderColor: "red", outline: "none"}} className="p-2" type="password" placeholder="Password" value={pass1} onChange={event => setPass1(event.target.value)} /><br /><br />
                                    <input style={{borderRadius: "20px", borderWidth: "2px", borderColor: "red", outline: "none"}} className="p-2" type="password" placeholder="Retype Password" value={pass2} onChange={event => setPass2(event.target.value)} /><br /><br />
                                    <Button variant="primary" className="pl-5 pr-5" type="submit">NEXT</Button>
                                </form><br />
                                <Button variant="light" onClick={() => props.onSignin()} className="pl-5 pr-5">SIGN IN</Button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Signup;