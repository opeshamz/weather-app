import React, { useState } from 'react';
import './App.css';

const api={
  key:"5a1d328098fff783bbcd16c7f43afe2d",
  base:"https://api.openweathermap.org/data/2.5/"
  
}
function App () {
  const [query, setQuery]= useState('');
  const [weather, setWeather] = useState({});

  const search = evn =>{
    if (evn.key ==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => { 
        setWeather(result)
        setQuery('')
        console.log(result)
      });
    }
  }
  const dateBuilder= (m) => {
    let months=["january","february","march","April","may","june","july","August","september","october","november","december"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    
    let day = days[m.getDay()];
    let date = m.getDate();
    let month = months[m.getMonth()];
    let year = m.getFullYear();

    return `${day} ${date} ${month} ${year}`; 
  }
 
  
  
  return (
      <div className="apps">
        <div>
        <input
         className="search" 
         placeholder="search for city or country"
         onChange={e => setQuery(e.target.value)}
         value={query}
         onKeyPress={search}
         />
        </div>
        {(typeof weather.main !="undefined") ? (
          <div>
        <div className='card'>
        <div className= "temperature-box">
      <div className="temp">{Math.round(weather.main.temp)}°</div>
      <div className="weather-type">
        {weather.weather[0].main}
      </div>
      
    </div>
      <div className="location">
      <div className="location-name">{weather.name},{weather.sys.country} </div>
      <div className="location-date">{dateBuilder(new Date())}</div>
      <p className="weather">
      Description:  {weather.weather[0].description}
      </p>
      <p className="weather">
      Humidity:  {weather.main.humidity}%
      </p>
     
      
    </div>
    
    </div>
    </div>
          ) :('') }
      </div>
    );
 
}

export default App;
