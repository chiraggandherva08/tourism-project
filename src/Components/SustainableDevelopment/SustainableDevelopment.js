import React, {useState} from "react";
import guidelines from "./guidelines";
import './Style.css';

const SustainableDevelopmentGuidelines = ({sno, data}) => {
    return (
        <li className="SustainableDevelopmentGuidelines">
            <div className="sno-sustainable">
                {sno}
            </div>
            <div className="data-sustainable">
                {data}
            </div>
        </li>
    )
}

const SustainableDevelopment = () => {
    return (
        <React.Fragment>
            <h2 id="SustainableHeading">
                <span id="highlighted-text">
                    Sustainable development guidelines 
                </span> 
                <br />
                 for tourism in India can help ensure that tourism activities in the country are environmentally, socially, and economically sustainable. Here are some key guidelines that can be followed:
            </h2>

            <ul className="SustainableDevelopment" id="SustainableDevelopment">{
                guidelines.map((data, index) => {
                    return (
                        <SustainableDevelopmentGuidelines sno={index} data={data} key={index} >
                        </SustainableDevelopmentGuidelines>
                    )
                })
            }</ul>

            <h2 id="SustainableEnding">
                By following these sustainable development guidelines, tourism in India can contribute to economic growth while minimizing the impact on the environment and promoting the well-being of local communities.
            </h2>
        </React.Fragment>
    );
}

export default SustainableDevelopment;
