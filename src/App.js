import React from 'react';
import './App.css';
// import Header from './components/Header';
// import Hackerrank from './components/Hackerrank';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Welcome from './components/Welcome';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Register from './components/Register';
// import Aboutus from './components/Aboutus';
import Info from './components/Info';

function App() {
//   const [welcome, setWelcome] = useState(true);
//   const [login, setLogin] = useState(false);
//   const [signup, setSignup] = useState(false);
//   const [register, setRegister] = useState(false);
//   const [home, setHome] = useState(false);
//   const [uname, setUname] = useState("");
//   const [rnumber, setRnumber] = useState("");
//   const [cpass, setCpass] = useState("");

//   function onWelcome () {
//     setWelcome(false)
//     setLogin(true)
//   }

//   function onSignup () {
//     setLogin(false)
//     setSignup(true)
//   }

//   function onSignin () {
//     setSignup(false)
//     setLogin(true)
//   }

//   function onVerify(name, number, pass) {
//     setUname(name);
//     setRnumber(number);
//     setCpass(pass);
//     setRegister(true);
//     setSignup(false);
//   }

//   function onSignIn() {
//     setRegister(false);
//     setLogin(true);
//   }

//   function Home() {
//     setRegister(false);
//     setHome(true);
//   }

//   function HomeScreen() {
//     setHome(true);
//     setLogin(false);
//   }

//   if (welcome) {
//     return <Welcome onWelcome={() => onWelcome()} />
//   } 
//   if (login) {
//     return <Login onSignup={() => onSignup()} HomeScreen={() => HomeScreen()} />
//   }
//   if (signup) {
//     return <Signup onSignin={() => onSignin()} onVerify={onVerify} />
//   }
//   if (register) {
//     return <Register onSignin={() => onSignIn()} name={uname} number={rnumber} pass={cpass} Home={() => Home()} />
//   }
//   if (home) {
//     return (
//       <div>
//         <Header />
//         <Hackerrank />
//         <Services />
//         <Contact />
//       </div>
//     );
//   }

    return (
      <Info />
    );
}

export default App;