import React from "react";
import './Style.css';

const Header = () => {

    const getUserCurrentLocation = () => {
        const getLocation = (position) => {
            const coordinates = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            return coordinates;
        };

        const throwError = (error) => {
            return error;
        };
        navigator.geolocation.getCurrentPosition(getLocation, throwError);
    }

    return (
        <React.Fragment>
            <div className="header">
                <div className="hero-disc">
                    About
                </div>
            </div>

            <div className="user_locations">
                <button id="from-location" onClick={() => { getUserCurrentLocation() }}>grant location access</button>
                <button id="to-location">Your Destination</button>
            </div>
        </React.Fragment>
    );
}

export default Header;