import { Dispatch, SetStateAction } from 'react';

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
    weather: any[];
    pop?: number;
}

export interface IDaily {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: any;
    feels_like: any;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: any[];
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
    current: any;
    hourly: any[];
    daily: any[];
}

export type CurrentCity = {
    currentCityInfo: any;
    setCurrentCityInfo: Dispatch<SetStateAction<any>>;
};
