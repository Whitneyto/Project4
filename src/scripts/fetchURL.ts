export function fetchURL(userI: string, mode: string) {
  userI = userI.replace(/\s/g, "");
  console.log(mode);
  switch (mode) {
    case "current": {
      console.log(mode);
      return (
        "https://api.weatherapi.com/v1/current.json?key=7a884dd5e91e4513a1a210128210110&q=" +
        userI +
        "&aqi=no"
      );
    }
    case "forecast": {
      console.log(mode);
      return (
        "https://api.weatherapi.com/v1/forecast.json?key=7a884dd5e91e4513a1a210128210110&q=" +
        userI +
        "&days=5&aqi=no&alerts=no"
      );
    }
    default: {
      return (
        "https://api.weatherapi.com/v1/current.json?key=7a884dd5e91e4513a1a210128210110&q=" +
        userI +
        "&aqi=no"
      );
    }
  }
}
