import React, { useState } from "react";
import './Styles.css';
import allReviews from "./ReviewsData";

const Review_ = ({ place, username, review }) => {
    return (
        <li className="review">
            <div className="user-name-review">{place}</div>
            <div className="user-name-review">{username}</div>
            <div className="review-message">{review}</div>
        </li>
    )
}

function Reviews() {

    const [allData, setAllData] = useState([]);

    const addReview = () => {
        // const rev = document.querySelector("#");
    }

    const filterAllReviews = () => {
        const location = document.querySelector("#filter-for").value.toLowerCase().trim();
        const filteredReviews = [];

        if (location == "") {
            setAllData([]);
            return;
        }

        allReviews.map( arr => {
            if (arr[0].startsWith(location)) {
                filteredReviews.push(arr);
            }
        });
        setAllData(filteredReviews[0][1]);
    }

    return (
        <React.Fragment>
            <h2 id="submit-reviews-heading" >Submit your review</h2>

            <div className="review-section" id="reviews">
                <div className="input-reviews" >
                    <div className="inputs-for-review">
                        <input type="text" id="review-location-name" placeholder="Enter location" />
                        <input type="text" id="reviewer-name" placeholder="Enter your name" />
                        <textarea cols="30" rows="5" id="review-location" type="text" placeholder="Enter review..." ></textarea>
                    </div>

                    <button id="review-location-btn" onClick={() => { addReview() }}>Submit</button>
                </div>

                <input type="text" id="filter-for" onChange={() => {filterAllReviews()}} placeholder="Filter for?" />

                <h1 id="title-reviews"></h1>

                <ul className="all-reviews">{
                    (allData.length == 0) ? (
                            <div id="search-for-places">Search For Places</div>
                    ) : (
                        allData.map( (place, index) => {
                            return <Review_ key={index} username={place[0]} review={place[1]}/>
                        })
                    )
                }
                </ul>
            </div>

        </React.Fragment>
    );
}

export default Reviews;