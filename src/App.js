import React, { useState } from "react";
import "./App.css";
import { FectWeather } from "./API/FetchWeather";

export default function App() {
   const [query, setQuery] = useState("");
   const [weather, setWeather] = useState({});

   const search = async (event) => {
      if (event.key === "Enter") {
         const data = await FectWeather(query);
         setWeather(data);
         setQuery("");
      }
   };
   return (
      <div className="main-container">
         <input
            type="text"
            className="search"
            placeholder="Enter city here..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyPress={search}
         />
         {weather.main && (
            <div className="city">
               <h2 className="city-name">
                  <span>{weather.name}</span>
                  <sup>{weather.sys.country}</sup>
               </h2>
               <div className="city-temp">
                  {Math.round(weather.main.temp)}
                  <sup>&deg;C</sup>
               </div>
               <div className="info">
                  <img
                     src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                     alt="Weather icon"
                     className="city-icon"
                  />
                  <p>{weather.weather[0].decription}</p>
               </div>
            </div>
         )}
      </div>
   );
}
