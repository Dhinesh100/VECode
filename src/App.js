import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Register from './components/Register';
import Aboutus from './components/AboutPage';
import Info from './components/InfoPage';
import Profile from './components/ProfilePage';
import HomePage from './components/HomePage';

function App() {
  if(localStorage.getItem("welcome")===null) {
    localStorage.setItem("welcome", "true");
  }
  if(localStorage.getItem("login")===null) {
    localStorage.setItem("login", "false");
  }
  if(localStorage.getItem("signup")===null) {
    localStorage.setItem("signup", "false");
  }
  if(localStorage.getItem("register")===null) {
    localStorage.setItem("register", "false");
  }
  if(localStorage.getItem("home")===null) {
    localStorage.setItem("home", "false");
  }
  const [welcome, setWelcome] = useState(localStorage.getItem("welcome"));
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const [signup, setSignup] = useState(localStorage.getItem("signup"));
  const [register, setRegister] = useState(localStorage.getItem("register"));
  const [home, setHome] = useState(localStorage.getItem("home"));
  const [uname, setUname] = useState("");
  const [rnumber, setRnumber] = useState("");
  const [cpass, setCpass] = useState("");

  function onWelcome () {
    setWelcome("false")
    localStorage.setItem("welcome", "false");
    setLogin("true")
    localStorage.setItem("login", "true");
  }

  function onSignup () {
    setLogin("false")
    localStorage.setItem("login", "false");
    setSignup("true")
    localStorage.setItem("signup", "true");
  }

  function onSignin () {
    setSignup("false")
    localStorage.setItem("signup", "false");
    setLogin("true")
    localStorage.setItem("login", "true");
  }

  function onVerify(name, number, pass) {
    setUname(name);
    setRnumber(number);
    setCpass(pass);
    setRegister("true");
    localStorage.setItem("register", "true");
    setSignup("false");
    localStorage.setItem("signup", "false");
  }

  function onSignIn() {
    setRegister("false");
    localStorage.setItem("register", "false");
    setLogin("true");
    localStorage.setItem("login", "true");
  }

  function Home() {
    setRegister("false");
    localStorage.setItem("register", "false");
    setHome("true");
    localStorage.setItem("home", "true");
  }

  function HomeScreen() {
    setHome("true");
    localStorage.setItem("home", "true");
    setLogin("false");
    localStorage.setItem("login", "false");
  }

  if (welcome==="true") {
    return <Welcome onWelcome={() => onWelcome()} />
  } 
  if (login==="true") {
    return <Login onSignup={() => onSignup()} HomeScreen={() => HomeScreen()} />
  }
  if (signup==="true") {
    return <Signup onSignin={() => onSignin()} onVerify={onVerify} />
  }
  if (register==="true") {
    return <Register onSignin={() => onSignIn()} name={uname} number={rnumber} pass={cpass} Home={() => Home()} />
  }
  if (home==="true") {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/profile" component={Profile} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/info" component={Info} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;