import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Weather } from './Components/Weather';
import { HeaderBar } from './Components/HeaderBar';
import { FooterBar } from './Components/FooterBar';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <Weather></Weather>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
