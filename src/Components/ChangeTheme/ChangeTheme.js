import React from "react";
import './Style.css';

const ChangeTheme = () => {
    const changeTheme = () => {
        const menuBar = document.querySelector(".menubar");
        menuBar.classList.toggle("themed-menubar");
    }

    return (
        <React.Fragment>
            <div className="theme-btn" onClick={() => changeTheme()}>
                <img src="" alt="change theme" />
            </div>
        </React.Fragment>
    );
}