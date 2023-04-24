import React from "react";

const TourGuide = () => {
    return (
        <React.Fragment>
            <h1 className="text-center text-sucess my-5"> TOUR GUIDES</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src=" " />
                        <div className="card" >
                            <img className = "card-img-top" src="..." alt="Card image cap" />
                            <div className = "card-body">
                                <h5 className = "card-title">Paras Goyal</h5>
                                <p className = "card-text">Hello Friends! My name is Paras and I am a professional tour guide in India, Delhi -My passion and my curiosity and here I want to share this amazing city with you.</p>
                            </div>
                            <ul className = "list-group list-group-flush">
                                <li className = "list-group-item">LANGUAGES : English,Hindi</li>
                                <li className = "list-group-item">AVAILABLE AREAS : Delhi,Jaipur,Agra</li>
                                <li className = "list-group-item">RESPONSE TIME : 5 Hours on average</li>
                                <li className = "list-group-item">CONTACT NUMBER : 95601XXXXX</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <img src=" " />
                        <div className = "card" >
                            <img className = "card-img-top" src="..." alt="Card image cap" />
                            <div className = "card-body">
                                <h5 className = "card-title">Chirag gandherva</h5>
                                <p className = "card-text">Namaste!Dear travellers. Let's explore Incredible India. My name is chirag & I'm a professional tour guide in Northern India, Approved & Licenced by the Ministry of Tourism, Govt of India.</p>
                            </div>
                            <ul className = "list-group list-group-flush">
                                <li className = "list-group-item">LANGUAGES : English,Hindi,punjabi</li>
                                <li className = "list-group-item">AVAILABLE AREAS : Delhi,Amritsar</li>
                                <li className = "list-group-item">RESPONSE TIME : 2 Hours on average</li>
                                <li className = "list-group-item">CONTACT NUMBER : 99578XXXXX</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <img src=" " />
                        <div className = "card" >
                            <img className = "card-img-top" src="..." alt="Card image cap" />
                            <div className = "card-body">
                                <h5 className = "card-title">Dhruv Chopra</h5>
                                <p className = "card-text">Travel like a local with the expertise of a local. Not just another local tours but tours itself by the local. Feel Free to Ask for finding unique activities/customised tours in any part of India.</p>
                            </div>
                            <ul className = "list-group list-group-flush">
                                <li className = "list-group-item">LANGUAGES : English,Hindi</li>
                                <li className = "list-group-item">AVAILABLE AREAS : Delhi(living),patna</li>
                                <li className = "list-group-item">RESPONSE TIME : 1 Hour on average</li>
                                <li className = "list-group-item">CONTACT NUMBER : 85602XXXXX</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TourGuide;