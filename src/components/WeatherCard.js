import React from 'react';
import { FaCloud, FaSun, FaSnowflake, FaCloudRain } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WeatherCard = ({ city, weather, temp }) => {
  const getWeatherIcon = () => {
    switch (weather) {
      case 'Clouds':
        return <FaCloud />;
      case 'Clear':
        return <FaSun />;
      case 'Snow':
        return <FaSnowflake />;
      case 'Rain':
        return <FaCloudRain />;
      default:
        return <FaSun />;
    }
  };

  return (
  <div className="col-lg-6 text-center col-sm-12 card mt-3 mx-4">
    <div className='row'>
        <div className='col-6 card-body'>
            <h2 className='city text-center card-title'>{city}</h2>
        </div>
        <div className='col-6 card-text'>
            <div className="weather-icon">{getWeatherIcon()}</div>
            <div className="temp">{temp}°C</div>
        </div>
    </div>
  </div>
);
};

export default WeatherCard;