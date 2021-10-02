import { useState, useEffect } from "react";
import weatherlogo from "../assets/imgs/mainweather.png";
import { fetchURL } from "../scripts/fetchURL";
import { Display } from "./Display";
import "../assets/stylesheet/userinput.css";

let isClicked: boolean = false;
export function UserInput(): JSX.Element {
  const [userInput, setUserInput] = useState<string>("Newark,Delaware");
  const [url, setURL] = useState<string>("");
  const [mode, setMode] = useState<string>("current");
  const [dd, setDD] = useState<string>("Select View");
  return (
    <div>
      <div className="main-weather-logo">
        <img src={weatherlogo}></img>
      </div>
      <div>
        <input
          className="location-input"
          placeholder="Newark, Delaware, USA"
          onChange={(e) => {
            isClicked = false;
            setUserInput(e.target.value);
          }}></input>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {dd}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setMode("current");
                  setDD("Current Weather");
                }}>
                Current Weather
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => {
                  setMode("forecast");
                  setDD("5 Days Forecast");
                }}>
                5 Days Forecast
              </button>
            </li>
          </ul>
        </div>
      </div>
      <p>
        <button
          onClick={() => {
            setURL(fetchURL(userInput, mode));
            isClicked = true;
          }}>
          Check Out Weather!
        </button>
      </p>
      {isClicked && <Display url={url} mode={mode} dd={dd}></Display>}
    </div>
  );
}
