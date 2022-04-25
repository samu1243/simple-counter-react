import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { SecondsCounter } from "../component/SecondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="counter">
			<SecondsCounter />
		</div>
	);
};

export default Home;
