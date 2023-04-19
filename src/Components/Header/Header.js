import React from "react";
import './Style.css';

const Header = () => {

    const getUserCurrentLocation = () => {
        const getLocation = (position) => {
            const coordinates = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            console.log(coordinates);
            return coordinates;
        };

        const throwError = (error) => {
            return error;
        };
        navigator.geolocation.getCurrentPosition(getLocation, throwError);
    }

    const setLocation = (event) => {
        const endLoc = event.target.value;
        document.querySelector(".input-section input").value = endLoc;
    }

    return (
        <React.Fragment>
            <div className="header">
                <div className="hero-disc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolorem 
                </div>
            </div>

            <div className="user_locations">
                <button id="from-location" onClick={() => { getUserCurrentLocation() }}>grant location access</button>
                <input onChange={(event) => {setLocation(event)}} id="to-location" placeholder="Your Destination"/>
            </div>
        </React.Fragment>
    );
}

export default Header;