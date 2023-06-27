import { useEffect, useState } from 'react'
import axios from "axios";
import { weatherURL, testData } from '../constants';
import { Divider } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { getDay, getTime } from '../utils/date';

export default function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(testData);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(weatherURL);
            console.log(response);
            setWeatherData(response.data);
        }

        fetch();
    }, []);

    console.log(weatherData);

    return (
        <div
            className='weatherContainer'
            style={{
                backgroundImage: `url("/images/${
                    weatherData.current.weather[0].description.includes("clear") ?
                    "sunny" :
                    weatherData.current.weather[0].description.includes("cloud") ?
                    "cloudy" :
                    weatherData.current.weather[0].description.includes("rain") ?
                    "rain" :
                    weatherData.current.dt > weatherData.current.sunset || weatherData.current.dt < weatherData.current.sunrise ? 
                    "night" : ""
                    }.png")`
            }}
        >
            <div className='nyBox'>
                <h2>New York</h2>
                <h1>{parseInt(weatherData.current.temp)}°</h1>
                <p>{weatherData.current.weather[0].main}</p>
                <p>H: {parseInt(Math.max(...Object.values(weatherData.daily[0].temp)))}° L: {parseInt(Math.min(...Object.values(weatherData.daily[0].temp)))}°</p>
            </div>

            <div className='hourlyContainer'>
                <p style={{ paddingBottom: "0.5em", paddingLeft: "0.5em", textAlign: "left" }}>{weatherData.daily[0].summary}.</p>
                <Divider />
                <div className="hourlyBox">
                    {
                        weatherData.hourly.map((hour, i) => {
                            if (i > 25) return "";
                            return (
                                <div key={i} className="hourlyWeather">
                                    <p>
                                        {
                                            getTime(hour.dt)
                                        }
                                    </p>
                                    {
                                        hour.weather[0].description.includes("clear") ?
                                            <WbSunnyIcon style={{ color: "#ffd900" }} />
                                            :
                                            hour.weather[0].description.includes("cloud") ?
                                                <CloudIcon />
                                                :
                                                hour.weather[0].description.includes("rain") ?
                                                    <>
                                                        <ThunderstormIcon />
                                                        <p style={{ fontSize: "0.7em", color: "#5ed1ff" }}>{parseInt(hour.pop * 100)}%</p>
                                                    </>
                                                    : ""
                                    }

                                    <p>{parseInt(hour.temp)}°</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="hourlyContainer">
                <p style={{ paddingBottom: "0.5em", paddingLeft: "0.5em", textAlign: "left" }}>8-DAY FORECAST</p>
                <Divider />
                <div className="dailyBox">
                    {
                        weatherData.daily.map((day, i) => {
                            return (
                                <div key={i}>
                                    <div className="dailyWeather">
                                        <p style={{ width: "3em" }}>{i === 0 ? "Today" : getDay(day.dt)}</p>
                                        {
                                            day.weather[0].description.includes("clear") ?
                                                <WbSunnyIcon style={{ color: "#ffd900" }} />
                                                :
                                                day.weather[0].description.includes("cloud") ?
                                                    <CloudIcon />
                                                    :
                                                    day.weather[0].description.includes("rain") ?
                                                        <div className='rainBox'>
                                                            <ThunderstormIcon />
                                                            <p style={{ fontSize: "0.7em", color: "#5ed1ff" }}>{parseInt(day.pop * 100)}%</p>
                                                        </div>
                                                        : ""
                                        }
                                        <p>{parseInt(day.temp.min)}°</p>
                                        <div className="tempBar"></div>
                                        <p>{parseInt(day.temp.max)}°</p>
                                    </div>
                                    {i === 7 ? "" : <Divider />}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};