import React from 'react';
import './App.css';
import Header from './components/Header';
import Hackerrank from './components/Hackerrank';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <Hackerrank />
      <Services />
      <Contact />
    </div>
  );
}

export default App;