import { Button, Divider, Grid, TextField, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { getCity, getWeather } from '../../httpClient';
import { IWeatherResponse } from '../../types';
import { ArrowDownward as ArrowDownwardIcon, ArrowUpward as ArrowUpwardIcon } from '@material-ui/icons';
import { WeatherIcon, TodaysWeather } from '../../components';
import Moment from 'react-moment';
import { useHistory } from 'react-router-dom';
import { CurrentCityContext, CurrentDay } from '../../contexts';
import { Alert } from '@material-ui/lab';
import useStyles from './styles.home';
import moment from 'moment';
import { HourlyDisplay } from '../../components/HourlyDisplay';
import axios from 'axios';

export default function Home(): JSX.Element {
    const [weatherData, setWeatherData] = useState<IWeatherResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [country, setCountry] = useState({
        city: 'Tashkent',
        country: 'Uzbekistan',
    });

    const classes = useStyles();
    const history = useHistory();
    const { setCurrentDayInfo } = useContext(CurrentDay);
    const { setCurrentCityInfo, currentCityInfo } = useContext(CurrentCityContext);

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();

        (async () => {
            try {
                const res = await getCity(country, source.token);
                if (res.statusText === 'OK') {
                    setError('');
                    setCurrentCityInfo(res.data);

                    const res_weather = await getWeather(res.data.city);
                    setWeatherData(res_weather.data);
                }
            } catch (error) {
                setError(error.message);
            }
        })();

        return () => {
            source.cancel;
        };
    }, [country]);

    const handleCountryCange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCountry({ ...country, [name]: value });
    };

    const setCity = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setCountry(country);
        }
    };

    const onClickDetailsHandler = (day: any) => {
        setCurrentDayInfo(day);
        history.push(`/${moment(day.dt * 1000).format('dddd')}`);
    };

    return (
        <div className="home">
            <Typography variant="h4">Weather Forecast</Typography>
            <br />
            <form className={classes.form} noValidate autoComplete="off" onKeyDown={setCity}>
                <TextField label="City" onChange={handleCountryCange} name="city" value={country.city} />
                <TextField label="Country" onChange={handleCountryCange} name="country" value={country.country} />
                <br />
                <Button variant="contained" color="primary">
                    Search
                </Button>
            </form>

            {error && <Alert severity="error">{error}</Alert>}

            {weatherData && (
                <React.Fragment>
                    <TodaysWeather
                        current={weatherData.current}
                        daily={weatherData.daily[0]}
                        tzOffset={weatherData.timezone_offset}
                        today
                    />

                    <br />
                    <br />

                    <Typography variant="h5">Weekly</Typography>
                    <Grid
                        container
                        style={{
                            margin: '20px 10px',
                        }}
                        justify="center"
                    >
                        {weatherData.daily.slice(1, 6).map((dayWeather, key) => (
                            <Grid
                                item
                                key={key}
                                className="day-wheather"
                                onClick={() => onClickDetailsHandler(dayWeather)}
                                lg={2}
                                md={3}
                                sm={4}
                                xs={6}
                            >
                                <div style={{ margin: '10px 0' }}>
                                    <strong>
                                        <Moment unix format="dddd">
                                            {dayWeather.dt}
                                        </Moment>
                                    </strong>
                                </div>

                                <div>
                                    <strong>
                                        <Moment unix format="DD">
                                            {dayWeather.dt}
                                        </Moment>
                                    </strong>
                                </div>

                                <div className={classes.iconWrapper}>
                                    <WeatherIcon icon={dayWeather.weather[0].icon} />
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                    }}
                                >
                                    <h5>Avg: {Math.round(dayWeather.temp.day)}°</h5>

                                    <div>
                                        <ArrowUpwardIcon style={{ transform: 'scale(0.75)' }} />
                                        <div>max: {Math.ceil(dayWeather.temp.max)}°</div>
                                    </div>
                                    <div>
                                        <ArrowDownwardIcon style={{ transform: 'scale(0.75)' }} />
                                        <div>min: {Math.floor(dayWeather.temp.min)}°</div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>

                    <Divider />
                    <br />
                    <Typography variant="h5">Hourly</Typography>
                    <Grid container justify="center">
                        {currentCityInfo.list.slice(0, 6).map((hourly: any, index: number) => (
                            <HourlyDisplay key={index} dayWeather={hourly} />
                        ))}
                    </Grid>
                </React.Fragment>
            )}
        </div>
    );
}
