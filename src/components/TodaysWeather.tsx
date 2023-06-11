import React, { useContext } from 'react';
import { ICurrentWeather, IDaily } from '../types';
import { Grid, Typography } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Moment from 'react-moment';
import GridLayout from '../layouts/GridLayout';
import { WeatherIcon } from './WeatherIcon';
import { CurrentCityContext } from '../contexts';
import moment from 'moment';

interface ITodaysProps {
    current: ICurrentWeather;
    daily?: IDaily;
    tzOffset?: number;
    today: boolean;
}

export const TodaysWeather = ({
    current: { temp, feels_like, humidity, pressure, wind_deg, wind_speed, sunrise, sunset, weather, dt },
    daily,
}: ITodaysProps): JSX.Element => {
    const { currentCityInfo } = useContext(CurrentCityContext);

    const getOptimizedVal = (val: any) => {
        if (!val.day) return Math.round(temp);
        return Math.round((temp.day + temp.eve + temp.morn + temp.night) / 4);
    };

    return (
        <React.Fragment>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <WeatherIcon icon={weather[0].icon} />

                <div>
                    <strong>
                        {currentCityInfo.city.name}, {currentCityInfo.city.country}
                    </strong>
                    <br />
                    <span style={{ color: '#848d95' }}>{weather[0].description}</span>
                </div>
            </div>

            <GridLayout>
                <React.Fragment>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h5">{moment(dt * 1000).format('dddd')}</Typography>
                        <Typography variant="h3">{getOptimizedVal(temp)}°</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        {[
                            ['Feels like:', `${getOptimizedVal(feels_like)}°`],
                            ['Humidity:', `${Math.round(humidity)}%`],
                            ['Pressure:', `${Math.round(pressure)}hPa`],
                            ['Wind:', `${wind_deg}, ${wind_speed} m/s`],
                        ].map(([datum, value], idx) => (
                            <div key={idx}>
                                <span>{datum}</span>
                                <span>{value}</span>
                            </div>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                margin: '10px 0',
                            }}
                        >
                            {daily && (
                                <>
                                    <div>
                                        <ArrowUpwardIcon style={{ transform: 'scale(0.75)' }} />
                                        <div>
                                            Max Temp:
                                            {`${daily.temp.max}°`}
                                        </div>
                                    </div>
                                    <div>
                                        <ArrowDownwardIcon style={{ transform: 'scale(0.75)' }} />
                                        <div>
                                            Min Temp:
                                            {`${daily.temp.min}°`}
                                        </div>
                                    </div>
                                </>
                            )}

                            <div>
                                <WbSunnyIcon />
                                <div>
                                    Sunrise:
                                    <Moment unix format="HH:mm">
                                        {sunrise}
                                    </Moment>
                                </div>
                            </div>
                            <div>
                                <Brightness3Icon />
                                <div>
                                    Sunset:
                                    <Moment unix format="HH:mm">
                                        {sunset}
                                    </Moment>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </React.Fragment>
            </GridLayout>
        </React.Fragment>
    );
};
