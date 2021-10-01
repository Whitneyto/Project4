let APImyptvcom = "ODE2ZDIwNTQyYTA1NDM3NmIyMTAxOTIwMWI2NjBjMTU6ZmVkMzM5NGItNTRlYi00NGQ0LTk4ODEtODFlZmRjMjUxNjgw"

let APIweather = "https://api.weather.gov/points/{latitude},{longitude}";
export function fetchLocation(inputLocation:string){
    return "https://api.myptv.com/geocoding/v1/locations/by-text?searchText="+inputLocation+"&apiKey="+APImyptvcom;
    
}

export function forecastURL(lat:string,long:string){
    return "https://api.weather.gov/points/"+lat+","+long
}