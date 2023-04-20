import React, { useTransition } from "react";
import './Style.css';

const TransportData = () => {
    const key = 'abd31ca55f920bd7960baad553c870a3';
    const url = `http://api.aviationstack.com/v1/flights?access_key=${key}`;

    // fetch(url).then(response => response.json()).then(
    //     response => {
    //         console.log(response);
    //     }
    // )

    return (
        <React.Fragment>
            {
                <div className="airplane">
                </div>
            }
        </React.Fragment>
    );
}

export default TransportData;