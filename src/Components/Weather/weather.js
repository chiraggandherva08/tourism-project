import React from "react";
import "./style.css";

function Weather() {
    function getTime() {
        let dateObj = new Date();
    
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        let date = dateObj.getDate();
        let day = days[dateObj.getDay()];
        let month = months[dateObj.getMonth()];
        let year = dateObj.getFullYear();
    
        let hours = dateObj.getHours();
        let minute = dateObj.getMinutes();
    
        return [hours, minute, date, month, year, day];
    }

    function getData(city, data) {
        let minTemp = data.main.temp_min;
        let maxTemp = data.main.temp_max;
        let temp = data.main.feels_like;    ;
        let humidity = data.main.humidity;
        let pressure = data.main.pressure;
        let main = data.weather[0].main;
    
        console.log(data);
    
        document.querySelector(".image img").src = `./weather-assets/${main.toLowerCase()}.svg`;
    
        document.querySelector(".disc").innerText = main;
        document.querySelector(".city-name").innerText = `${city}`;
    
        let time = getTime();
    
        document.querySelector(".timing").innerHTML = `${time[0]} : ${time[1]} <br> ${time[2]} / ${time[3]} / ${time[4]} <br> ${time[5]}`;
        document.querySelector(".max").innerHTML = `Max : <br> ${maxTemp}`;
        document.querySelector(".min").innerHTML = `Min : <br> ${minTemp}`;
        document.querySelector(".current").innerHTML = `Temp: <br> ${temp}`;
        document.querySelector(".atm-pre").innerHTML = `Pressure: <br> ${pressure} mbar`;
        document.querySelector(".humidity").innerHTML = `Humidity: <br> ${humidity}%`;
    }

    function fetchData(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c8bf51e89e3187a5bb1c6bf76ff14902`).then(response => response.json()).then(
            (data) => {
                getData(city, data);
            }
        );
    }

    const passInput = () => {
        const city = document.querySelector(".input-section input").value;
        fetchData(city);
    }

    return (
        <React.Fragment>
            <div className="main-body">
                <div className="input-section">
                    <input onChange={() => { passInput() }} type="text" placeholder="City name" />
                </div>

                <div className="image">
                    <img src="./weather-assets/cross.svg" />
                </div>

                <div className="disc">
                    --
                </div>

                <div className="city-name">
                    City:
                    --
                </div>

                <div className="timing">
                    Time:
                    --
                </div>

                <div className="temp">
                    <div className="max">
                        Max <br />--
                    </div>
                    <div className="min">
                        Min <br />--
                    </div>
                    <div className="current">
                        --
                    </div>
                </div>

                <div className="additional">
                    <div className="atm-pre">
                        Pressure:
                        <br />
                        --
                    </div>

                    <div className="humidity">
                        Humidity:
                        <br /> --
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Weather;