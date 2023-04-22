import React, { useState } from "react";
import './Style.css';

const Menu = () => {

    window.addEventListener("scroll", () => {
        const navBar = document.querySelector(".nav-bar");

        if (window.scrollY >= 400 && window.innerWidth > 600) {
            navBar.classList.add("fixed-nav-bar");
        }
        else {
            navBar.classList.remove("fixed-nav-bar");
        }
    })

    let isToggled = false;
    const toggleMenu = () => {
        if (window.innerWidth <= 830) {
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
        translate.classList.add("translator-toggle");
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
                    <a href="#" className="menu-link">Venture</a>
                </li>
                <li id="menuitems">
                    <ul id="menuitems-list">
                        <li className="items" onClick={() => toggleMenu()}>
                            <a className="menu-link" href="#Medium">Planning</a>
                        </li>
                        <li className="items" onClick={() => toggleMenu()}>
                            <a className="menu-link" href="#Medium">Travelling</a>
                        </li>
                        <li className="items" onClick={() => toggleMenu()}>
                            <a className="menu-link" href="#Hotels">Exploration</a>
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