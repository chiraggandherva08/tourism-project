import React, { useState } from "react";
import './Styles.css';

const Review_ = ({ username, review }) => {
    return (
        <li className="review">
            <div className="user-name-review">{username}</div>
            <div className="review-message">{review}</div>
        </li>
    )
}

function Reviews() {

    const [reviewsData, setReviewsData] = useState([]);

    const fetchAllReviews = () => {
        fetch("./Json/reviewsdata.json").then(res => res.json()).then(
            (res) => {
                setReviewsData(res);
            }
        )
        const location = document.querySelector("#review-location").value.trim().toLowerCase();
        const titleReviews = document.querySelector("#title-reviews");
        titleReviews.innerText = `Reviews of ${location}`;

        filterAllData(location);
    }

    const filterAllData = (location) => {
        const filteredData = reviewsData.map((value) => {
            value.includes(location);
        });
    }


    return (
        <React.Fragment>
            <div className="review-section">
                <div className="input-reviews">
                    <input id="review-location" type="text" placeholder="Enter location..." />
                    <button id="review-location-btn" onClick={() => { fetchAllReviews() }}>Search</button>
                </div>

                <h1 id="title-reviews"></h1>
                <ul className="all-reviews">{
                    <Review_/>
                }
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Reviews;