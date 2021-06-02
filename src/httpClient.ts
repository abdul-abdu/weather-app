import axios from 'axios';
import { IQueryCity, IQueryForecast } from './types';

const httpClient = axios.create({
    baseURL: 'https://api.openweathermap.org/',
});

// Should be in .env
const apiKey = '65aa39627e777b9b50dc8b47b457fb20';

const citiesEndpoint =
    'https://openweathermap.org/data/2.5/find?type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02&_=1613412071764';

const weatherEndpoint = `data/2.5/onecall?appid=${apiKey}&exclude=minutely&units=metric`;

const urlForecast = 'data/2.5/onecall?';

const urlCity = 'data/2.5/forecast?q=';

export const getCities = async (query: string) => await httpClient.get(`${citiesEndpoint}&q=${query}`);

export const getForecast = async (query: IQueryForecast) =>
    await httpClient.get(
        `${urlForecast}lat=${query.lat}&lon=${query.lon}&exclude=hourly,minutely,alerts&units=metric&appid=${apiKey}`,
    );

export const getCity = async (query: IQueryCity, cancelToken: any) =>
    httpClient.get(`${urlCity}${query.city},${query.country}&appid=${apiKey}`, { cancelToken });

export const getWeather = async (city: any) =>
    httpClient.get(`${weatherEndpoint}&lat=${city.coord.lat}&lon=${city.coord.lon}`);
