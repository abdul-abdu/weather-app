import { Dispatch, SetStateAction } from "react";

export interface IQueryCity {
	city: string;
	country: string;
}

export interface IQueryForecast {
	lat: number;
	lon: number;
}

interface ITemp {
	day: number;
}

export interface ICurrentWeather {
	dt: number;
	sunrise?: number;
	sunset?: number;
	temp: any;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	weather: WeatherSummary[];
	pop?: number;
}

export interface IDaily {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: Temp;
	feels_like: FeelsLike;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	weather: WeatherSummary[];
	clouds: number;
	pop: number;
	uvi: number;
	snow?: number;
}

export interface IWeatherResponse {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: CurrentWeather;
	hourly: CurrentWeather[];
	daily: Daily[];
}

export type CurrentCity = {
	currentCityInfo: any;
	setCurrentCityInfo: Dispatch<SetStateAction<any>>;
};
