import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderBar } from './Components/HeaderBar';
import { FooterBar } from './Components/FooterBar';
import { UserInput } from './Components/UserInput';
import { Display } from './Components/Display';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <p>Weather Forcast</p>
      <UserInput></UserInput>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
