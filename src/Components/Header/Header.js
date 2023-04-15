import React from "react";
import './Style.css';
import HeroImg from "./travel-hero-img.svg";

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="hero-image">
                    <img src={HeroImg} />
                </div>
                <div className="hero-disc">
                    Tourism
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;