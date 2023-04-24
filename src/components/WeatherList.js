import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import ButtonP from './Button';
import '../assets/css/WeatherList.css'


const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const cities = [ 'San Luis Rio Colorado', 'Mexicali', 'Tecate', 'Tijuana', 'San Diego'];
    const apiKey = 'cf44e93b52d564987f483061cf006652';
    const units = 'metric';
    const promises = [];

    cities.forEach(city => {
      promises.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
        )
      );
    });

    Promise.all(promises)
      .then(responses => {
        const data = responses.map(response => ({
          city: response.data.name,
          weather: response.data.weather[0].main,
          temp: Math.round(response.data.main.temp),
        }));
        setWeatherData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className='row'>
            <div className='col-12 mt-3'>
                <ButtonP/>
            </div>
            <div className='col-12'>
                {weatherData.map((data, index) => (
                <WeatherCard
                    key={index}
                    city={data.city}
                    weather={data.weather}
                    temp={data.temp}
                />
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default WeatherList;
