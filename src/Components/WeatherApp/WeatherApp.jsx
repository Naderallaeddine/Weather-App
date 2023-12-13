import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';

export const WeatherApp = () => {
  const api_key = "62aff1d6088b8dfd160588034f1bc3a1";
  const defaultCity = "Lebanon"; // Set your default city here

  const [wicon, setWicon] = useState(cloud_icon);
  const [defaultData, setDefaultData] = useState({
    main: { humidity: "", temp: "" },
    wind: { speed: "" },
    name: "Lebanon",
    weather: [{ icon: "" }],
  });

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    const cityName = element[0].value;

    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${api_key}`;
      let response = await fetch(url);
      let data = await response.json();

      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-rate");
      const temperature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML = data.main.humidity + " %";
      wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
      temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
      location[0].innerHTML = data.name;

      setWeatherIcon(data.weather[0].icon);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  const setWeatherIcon = (icon) => {
    if (icon === "01d" || icon === "01n") {
      setWicon(clear_icon);
    } else if (icon === "02d" || icon === "02n") {
      setWicon(cloud_icon);
    } else if (icon === "03d" || icon === "03n") {
      setWicon(drizzle_icon);
    } else if (icon === "04d" || icon === "04n") {
      setWicon(drizzle_icon);
    } else if (icon === "09d" || icon === "09n") {
      setWicon(rain_icon);
    } else if (icon === "10d" || icon === "10n") {
      setWicon(rain_icon);
    } else if (icon === "13d" || icon === "13n") {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };

  useEffect(() => {
    // Fetch initial weather data for the default city
    const fetchDefaultWeather = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        setDefaultData(data);
        setWeatherIcon(data.weather[0].icon);
      } catch (error) {
        console.error("Error fetching default weather data:", error);
      }
    };

    fetchDefaultWeather();
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div className='container'>
      <div className="top-bar">
        <input type='text' className='cityInput' placeholder='Search city' />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt='search' />
        </div>
      </div>
      <div className="weather-img">
        <img src={wicon} alt='cloud-icon' />
      </div>
      <div className="weather-temp">{Math.floor(defaultData.main.temp)} °c</div>
      <div className="weather-location">{defaultData.name}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{defaultData.main.humidity} %</div>
            <div className="text">humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">{Math.floor(defaultData.wind.speed)} km/h</div>
            <div className="text">wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
