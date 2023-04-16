import React from "react";
import './Style.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {

    const isLoaded = true;
    
    if (!isLoaded) {
        return (
            <div>Loading...</div>
        )
    }
    else {
        return (
            <GoogleMap className="map-section"
                zoom={10}
                center={{lat: 1440, lng: -80}}
                mapContainerClassName="map-container"
            ></GoogleMap>
        );
    }
}

export default Map;