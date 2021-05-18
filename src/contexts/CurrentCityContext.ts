import { createContext } from "react";
import { CurrentCity } from "../types";

export const initialCurrentCity = {
	currentCityInfo: {},
	setCurrentCityInfo: (): void => {
		throw new Error("setCurrentCategory function must be overridden");
	},
};

export const CurrentCityContext =
	createContext<CurrentCity>(initialCurrentCity);
