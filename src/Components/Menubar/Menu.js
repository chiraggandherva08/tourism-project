import React, { useState } from "react";
import './Style.css';

const Menu = () => {
    setTimeout(() => {
        const menubar = document.querySelector(".menubar");
        menubar.style.transform = "translateX(-50%) translateY(0%)";
    }, 200);

    let isToggled = false;
    const toggleMenu = () => {
        if (window.innerWidth <= 700) {
            const menu = document.querySelector("#menuitems");
            if (!isToggled) {
                menu.style.transform = "translateY(0%)";
                isToggled = true;
            } else {
                menu.style.transform = "translateY(100vh)";
                isToggled = false;
            }
        }
    }
    
    const toggleTranslate = () => {
        const translate = document.querySelector(".translator");
        translate.classList.toggle("translator-toggle");
        toggleMenu();
    }

    return (
        <React.Fragment>
            <div className="cross-icon" onClick={() => toggleMenu()}>
                <div className="line-1 line"></div>
                <div className="line-2 line"></div>
            </div>

            <ul className="menubar">
                <li id="logo">
                        <img id="logo-png" src="./Assets/logo.png" />
                        <a href="#" className="menu-link">Travel Today</a>
                </li>
                <li id="menuitems">
                    <ul id="menuitems-list">
                        <li className="items" onClick={() => toggleMenu()}>
                            <a className="menu-link" href="#Medium">Medium</a>
                        </li>
                        <li className="items" onClick={() => toggleMenu()}>
                            <a className="menu-link" href="#Hotels">Hotels</a> 
                        </li>
                        <li className="items" onClick={() => toggleMenu()}>
                            <a className="menu-link" href="#Restaurants">Restaurants</a>
                        </li>
                        <li className="items" onClick={() => toggleTranslate()}>
                            <a className="menu-link" href="#Translate">Translate</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Menu;