import { useState, useEffect } from "react";
import React from "react";
import "../App.css";
// import marsImage from '../mars.jpeg';

const Weather = (props) => {
  const [WeatherData, setWeatherData] = useState({});

  const fetchData = async () => {
    try {
      let res = await fetch(
        "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json"
      );
      if (res.status !== 200) {
        throw new Error("We have a problem!!");
      }
      let data = await res.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <img src={mars.jpeg} alt="Logo" style={{}} /> */}
      <p>{WeatherData.product}</p>
    </div>
  );
};

export default Weather;

// // place holder - http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json
// // API - https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0
