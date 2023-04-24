import React, { useState } from "react";
import './Style.css';
import allCities from "./citiesNames";

const Header = () => {
	const [citiesList, setFilteredCitiesList] = useState(allCities);

	const setLocation = (event) => {
		const destination = event.target.value.toLowerCase().trim();
		document.querySelector(".input-section input").value = destination;
		filterAllCities(destination);

		if (destination == "") {
			document.querySelector(".city-suggestions").style.display = "none";
			return;
		} else {
			document.querySelector(".city-suggestions").style.display = "flex";
		}
	}

	const filterAllCities = (destination) => {
		const filteredCities = [];
		allCities.filter((city) => {
			if (city.startsWith(destination))
				filteredCities.push(city);
		})
		setFilteredCitiesList([...filteredCities]);
	}

	const setValue = (event) => {
		const cityName_ = event.target.innerText;
		document.querySelector(".input-section input").value = cityName_;
		document.querySelector("#to-location").value = cityName_;

		document.querySelector(".city-suggestions").style.display = 'none';
	}

	return (
		<React.Fragment>
			<div className="user_locations" id="locations">
				<input id="from-location" placeholder="Your Location" />

				<div className="input-for-destination">

					<input onChange={(event) => { setLocation(event) }} id="to-location" placeholder="Your Destination" />

					<ul className="city-suggestions">
						{
							citiesList.map((value, indx) => {
								return (
									<li className="cities-sugg" key={indx} onClick={(event) => setValue(event)}>
										{value}
									</li>
								);
							})
						}
					</ul>

				</div>
			</div>
		</React.Fragment>
	);
}

export default Header;