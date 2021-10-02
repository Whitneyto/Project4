import './App.css';
import { HeaderBar } from './Components/HeaderBar';
import { FooterBar } from './Components/FooterBar';
import { UserInput } from './Components/UserInput';

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
