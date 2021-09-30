import { useState, useEffect } from "react"

const APIKey : string = "cb06f13186ff79c17c8d80515448f477";
export function Weather() : JSX.Element{
const [secURl, setSecURL] = useState<string>("");
    fetch("https://api.weather.gov/points/38.9108,-75.5277")
   .then(response => response.json())
   .then(data => {console.log(data.properties.forecast);setSecURL(data.properties.forecast)})
    
   fetch(secURl)
   .then(response => response.json())
   .then(data2 => console.log(data2.properties.periods[1].temperature));


   return <div>
   </div>
}