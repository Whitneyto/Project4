import axios from "axios";
import {useEffect, useState} from "react";
import {dataType} from "../interfaces/weather";

let isCurrent: boolean;
export function Display({url, mode, dd}: {url: string; mode: string; dd: string}): JSX.Element {
  const [myData, setMyData] = useState<dataType>();
  const [city, setCity] = useState<string>();
  const [region, setRegion] = useState<string>();
  const [country, setCountry] = useState<string>();

  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        try {
          setMyData(data);
          setCity(data.location.name);
          setRegion(data.location.region);
          setCountry(data.location.country);
          console.log(data.current.condition.text);
          console.log("loca:" + city);
        } catch (e) {
          console.log("Error:" + e);
        }
      });
  }, [url, mode]);

  return (
    <div>
      <div>
        {dd} of {myData?.location.name} {"," + myData?.location.region}{" "}
        {"," + myData?.location.country}{" "}
      </div>
      <div>
        <p>Temperature [F] : {myData?.current.temp_f}</p>
        <p>Temperature [C] : {myData?.current.temp_c}</p>
        <p>{myData?.current.condition.text}</p>
      </div>
    </div>
  );
}
