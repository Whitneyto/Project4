import { useEffect, useState } from "react";
import { forecastURL } from "../scripts/fetchlocation";


export function Coordinates({children,cord}:{children:string;cord:string}) : JSX.Element{
    const [latitude, setLat] = useState<string>("39.67818832397461");
    const [longitude, setLong] = useState<string>("-75.7616195678711");
    useEffect(() => {
        fetch(cord)
          .then((response) => response.json())
          .then((data) =>  {setLat(data.locations[0].referencePosition.latitude);
            setLong(data.locations[0].referencePosition.longitude);
            console.log(latitude ,longitude);
            });  
        }, 
            [cord]);

      

      /*{dataCollect.locations[0].referencePosition.latitude}*/
    return <div>

        <p>Your Coordinates are at : {latitude} latitude and {longitude} longitude</p>
      
    </div>
}