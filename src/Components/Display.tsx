import {useEffect, useState} from "react";
import {dataType} from "../interfaces/weather";
import '../assets/stylesheet/display.css'

export function Display({url, mode, dd}: {url: string; mode: string; dd: string}): JSX.Element {
  const [myData, setMyData] = useState<dataType>();
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        try {
          setMyData(data);
        } catch (e) {
          console.log("Error:" + e);
        }
      });
  }, [url, mode]);
  return (
    <div className = "display">
      <div className = "display-description">
        {dd} of {myData?.location.name} {"," + myData?.location.region}{" "}
        {"," + myData?.location.country}
        {" | "}
        {myData?.location.localtime}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4" id="fetch-icon">
            <img src={myData?.current.condition.icon}></img>
            <p>{myData?.current.condition.text}</p>
          </div>
          <div className="col-4">
            <p className="degreeF"> {myData?.current.temp_f} F </p>
            <p className="degreeC"> {myData?.current.temp_c} C </p>
            <p className="weather-info">Humidity: {myData?.current.humidity}% </p>
            <p className="weather-info">Precipitation: {myData?.current.precip_mm}%</p>
            <p className="weather-info">Wind: {myData?.current.wind_mph} mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}
