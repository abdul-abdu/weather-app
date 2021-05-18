import { createContext, Dispatch, SetStateAction } from "react";
import { ICurrentWeather } from "../types";

export type Context = {
	currentDayInfo: any;
	setCurrentDayInfo: Dispatch<SetStateAction<any>>;
};

export const initialContext = {
	currentDayInfo: {},
	setCurrentDayInfo: (): void => {
		throw new Error("setCurrentCategory function must be overridden");
	},
};

export const CurrentDay = createContext<Context>(initialContext);
