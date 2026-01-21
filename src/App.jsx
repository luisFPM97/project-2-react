import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import api from "./utilis/apiKeys";
import WeatherCart from "./components/WeatherCart";
import Loading from "./components/Loading";
import "./components/styles/weatherCart.css";
import WeatherCartError from "./components/WeatherCartError";


function App() {
  const [coords, setCoords] = useState(); 
  const [error, setError] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const [inputValueCountry, setInputValueCountry] = useState();
  const success = (pos) => {
    const obj = {
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
    };
    setCoords(obj);
  };


  useEffect(() => {
    if (inputValueCountry ) {
      const url =  `https://api.openweathermap.org/data/2.5/weather?q=${inputValueCountry}&appid=${api()}&lang=${"es"}`;
      axios.get(url)
      .then((res) =>{
        setWeather(res.data);
        
      })
        .catch((error) => console.log(error));
    }
  }, [inputValueCountry])


  useEffect(() => {
    if (coords) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${api()}&lang=${"es"}`;
      axios.get(url) 
        .then((res) => {
          setWeather(res.data); 
          const objTemp = {

            celsius: +(res.data.main.temp - 273.15).toFixed(1),
            farenheit: +(((res.data.main.temp - 273.15) * 9) / 5 + 32).toFixed(1),
            
          };
          setTemp(objTemp);
        })
        .catch((error) => console.log(error));
    } 
  }, [coords]);
  
  const errorCallback = (error) => {
    setError(`ERROR(${error.code}): ${error.message}`);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, errorCallback);
    console.log(weather)
  }, []);
  
  return (
    <>
    
      {coords ? (
        <div className="container">
          {weather  ? (
           
            <WeatherCart
              weather={weather}
              temp={temp}
              setInputValueCountry={setInputValueCountry} 
            />) 
            : 
            <Loading />}
        </div>
      ) : (
        <WeatherCartError error={error} />
      )}
    </>
  );
}

export default App;