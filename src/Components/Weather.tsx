import { useState, useEffect } from "react"

const APIKey : string = "cb06f13186ff79c17c8d80515448f477";
export function Weather() : JSX.Element{
  
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=cb06f13186ff79c17c8d80515448f477")
   .then(response => response.json())
   .then(data => console.log(data))
   return <div>
   </div>
}