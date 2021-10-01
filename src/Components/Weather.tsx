import { useState, useEffect } from "react";
import weatherlogo from "../assets/imgs/mainweather.png";
import { fetchLocation } from "../scripts/fetchlocation";
import {CORE} from '../interfaces/weather'
import { Coordinates } from "./Coordinates";

const APIKey: string = "cb06f13186ff79c17c8d80515448f477";

export function Weather(): JSX.Element {
  const [secURl, setSecURL] = useState<string>("");
  const [cord, setCord] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("Newark,Delaware");


/*
  useEffect(() => {
    fetch("https://api.weather.gov/points/38.9108,-75.5277")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.properties.forecast);
        setSecURL(data.properties.forecast);
      });
  }, []);

  useEffect(() => {
    fetch(fetchLocation(userInput))
      .then((response) => response.json())
      .then((data2) => console.log(data2.properties.periods[1].temperature));
  }, [1]);
*/

  return (
    <div>
      <div className="main-weather-logo">
        <img src={weatherlogo}></img>
      </div>
      <input
        className="location-input"
        placeholder="City, State"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      ></input>
      <button onClick={()=>setCord(fetchLocation(userInput))}>GO</button>
      <Coordinates 
      cord={cord}
       
      > </Coordinates>
    </div>
  );
}
