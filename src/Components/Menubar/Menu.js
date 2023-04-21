import React, { useState } from "react";
import './Style.css';

const Menu = () => {
    setTimeout(() => {
        const menubar = document.querySelector(".menubar");
        menubar.style.transform = "translateY(0%)";
    }, 200);

    window.addEventListener("scroll", () => {
        const navBar = document.querySelector(".nav-bar");

        if (window.scrollY >= 100 && window.innerWidth > 600) {
            navBar.classList.add("fixed-nav-bar");
        }
        else {
            navBar.classList.remove("fixed-nav-bar");
        }
    })

    const displayActive = () => {
        const menuitems = document.querySelectorAll(".items");

        menuitems.forEach((element, index) => {
            menuitems[index].addEventListener("click", () => {
                menuitems.forEach((element, index_) => {
                    if (index != index_) {
                        menuitems[index_].style.backgroundColor = "white";
                        menuitems[index_].style.color = "gray";
                    }
                });
                menuitems[index].style.backgroundColor = "rgb(69, 111, 246)";
                menuitems[index].style.color = "white";
            })
        });
    }

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
        displayActive();
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