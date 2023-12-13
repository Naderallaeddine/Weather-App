import React from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'


export const WeatherApp = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type='text' className='cityInput' placeholder='Search city'/>
            <div className="search-icon">
                <img src={search_icon} alt='search'/>
            </div>
        </div>
        <div className="weather-img">
            <img src={cloud_icon} alt='cloud-icon'/>
        </div>
        <div className="weather-temp">24</div>
        <div className="weather-location">london</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64</div>
                    <div className="text">humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon" />
                <div className="data">
                    <div className="wind-ratet">14</div>
                    <div className="text">wind speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
