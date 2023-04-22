import React from "react";
import './Styles.css';

const Review_ = ({username, review}) => {
    return (
        <li className="">
            <div className="user-name-review">{username}</div>
            <div className="review-message">{review}</div>
        </li>
    )
}

function Reviews() {
    const fetchAllReviews = () => {
        fetch("./Json/reviewsdata.json");
    }
    
    return (
        <React.Fragment>
            <ul>{

            }
            </ul>
        </React.Fragment>
    );
}

export default Reviews;