import React, {useState} from "react";
import "./style.css";

const DayWeather = ({weatherData, main}) => {
    return (
        <div className="main-body">
            <div className="image"><img src={`./weather-assets/${main.toLowerCase()}.svg`}/></div>
            <div className="disc">{weatherData[0]}</div>
            <div className="temp">
                <div className="max">Max <br />{weatherData[0]}</div>
                <div className="min">Min <br />{weatherData[1]}</div>
                <div className="current">{weatherData[2]}</div>
            </div>
        </div>
    );
}

function Weather() {

    const [cityName, setCityName] = useState('');
    const [weatherData, setData] = useState([]);

    let citiesName = [];
    fetch('./Json/citiesNames.json').then(response => response.json()).then(
        (response) => {
            citiesName = Object.keys(response);
        }
    )

    function fetchData(city) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?cnt=7&q=${city}&appid=c8bf51e89e3187a5bb1c6bf76ff14902`).then(response => response.json()).then((response) => {
                setData(response.list);
                setCityName(response.city.name);
            }
        );
    }

    const passInput = () => {
        const city = document.querySelector(".input-section input").value;
        if (city == "") {
            return;
        }
        setCityName(city);
        fetchData(city);
    }

    return (
        <React.Fragment>
            <div className="all-weather">
                <h2 id="weather-heading">{cityName} weather data for next 7 days:</h2>

                <div className="input-section">
                    <input type="text" placeholder="Enter city..." />
                    <button id="get-weather" onClick={() => passInput()}>Get weather</button>
                </div>

                <div className="weather-for-seven-days">
                    {
                        weatherData.map((object, index) => {
                            return (
                                <DayWeather key={index} weatherData={Object.values(object.main)} main={object.weather[0].main}/>
                            )
                        })
                    }
                </div>

            </div>
        </React.Fragment>
    )
}
export default Weather;