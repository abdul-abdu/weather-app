import axios from 'axios';
import { IQueryCity } from './types';

const httpClient = axios.create({
  baseURL: 'https://api.openweathermap.org/',
});

// Should be in .env
const apiKey = '19173320822bcef36bdf75e5f351e780';
const weatherEndpoint = `data/2.5/onecall?appid=${apiKey}&exclude=minutely&units=metric`;
const urlCity = 'data/2.5/forecast?q=';

export const getCity = (query: IQueryCity, cancelToken: any) =>
  httpClient.get(`${urlCity}${query.city},${query.country}&appid=${apiKey}`, { cancelToken });

export const getWeather = (city: any) =>
  httpClient.get(`${weatherEndpoint}&lat=${city.coord.lat}&lon=${city.coord.lon}`);
