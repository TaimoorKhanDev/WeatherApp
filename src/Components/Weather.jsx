import React from 'react'
import '../Components/Weather.css'
import search_icon from '../assets/search.jpg';
// import clear_icon from '../assets/clear.jpg';
import cloudy_icon from '../assets/cloudy.jpg';
// import drizzle_icon from '../assets/drizzle.jpg';
// import rain_icon from '../assets/rain.jpg';
//import snow_icon from '../assets/snow.jpg';
import wind_icon from '../assets/wind.jpg';
import humidity_icon from '../assets/humidity.jpg';



function Weather() {
    let api_key ="a36ce5bd0cbc7243bd5a036c98b09f93";

const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
  
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('City not found');
      }
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity-parcent");
      const wind = document.getElementsByClassName("wind-rate");
      const temperature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");
      humidity[0].innerHTML = data.main.humidity+"%";
      wind[0].innerHTML = data.wind.speed+"km/h";
      temperature[0].innerHTML = data.main.temp+"°C";
      location[0].innerHTML = data.name;
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };
    
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Search'/>
            <div className='search-icon' onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
    
            </div>
        </div>
        <div className='cloudy-icon'>
            <img src={cloudy_icon} alt="" />
        </div>
        <div className='weather-temp'>24°C</div>
        <div className='weather-location'>London</div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidity_icon} alt="" className='icon' />
                <div className='data'>
                    <div className='humidity-parcent'> 64% </div>
                    <div className='text'>Humidity </div> 
                </div>
            </div>

            <div className='element'>
                <img src={wind_icon} alt="" className='icon' />
                <div className='data'>
                    <div className='wind-rate'> 18km/h </div>
                    <div className='text'>Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Weather
