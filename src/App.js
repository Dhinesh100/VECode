import React from 'react';
import './App.css';
import Header from './components/Header';
import Hackerrank from './components/Hackerrank';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <Hackerrank />
      <Services />
      <Contact />
      {/* <About /> */}
    </div>
  );
}

export default App;