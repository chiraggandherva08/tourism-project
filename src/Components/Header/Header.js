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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni dolorem iste quibusdam itaque. Sit, laboriosam recusandae deleniti suscipit et officiis, eius, exercitationem itaque inventore repellendus quo laborum ipsa! Ut recusandae dolore doloribus at mollitia magnam ad sunt reiciendis ullam quibusdam, aut corporis suscipit, nesciunt eius voluptatum nisi possimus earum perspiciatis! Corrupti aliquam, quibusdam beatae quaerat obcaecati minima repudiandae vitae, laborum unde voluptatem corporis fugiat et. Eum nulla minus rem cum similique laboriosam magnam vitae cumque repellendus nemo, eius voluptates adipisci nihil perspiciatis rerum quos ullam numquam soluta voluptate modi qui officia consequatur. Dolorem mollitia laboriosam impedit corrupti ea eius exercitationem.
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