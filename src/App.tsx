import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { CurrentCityContext, CurrentDay } from "./contexts";
import Pages from "./pages";
import { ICurrentWeather } from "./types";

const App = () => {
	const [currentDayInfo, setCurrentDayInfo] = useState<ICurrentWeather>();
	const [currentCityInfo, setCurrentCityInfo] = useState<any>();
	return (
		<div className="App">
			<CurrentDay.Provider value={{ currentDayInfo, setCurrentDayInfo }}>
				<CurrentCityContext.Provider
					value={{ currentCityInfo, setCurrentCityInfo }}
				>
					<Pages />
				</CurrentCityContext.Provider>
			</CurrentDay.Provider>
		</div>
	);
};

export default hot(module)(App);
