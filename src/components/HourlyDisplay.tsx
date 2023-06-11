import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import Moment from 'react-moment';
import { WeatherIcon } from '../components';

const HourlyDisplay = ({ dayWeather }: any): ReactElement => {
    return (
        <Grid item className="day-wheather" lg={3} md={3} sm={4} xs={6} style={{ marginTop: '15px' }}>
            <div style={{ margin: '20px 0' }}>
                <strong>
                    <Moment unix format="h:mm a">
                        {dayWeather.dt}
                    </Moment>
                </strong>
            </div>

            <div>
                <WeatherIcon icon={dayWeather.weather[0].icon} />
            </div>
            <div>
                <h3>{dayWeather.main.temp} F</h3>
                <div>Humidity: {dayWeather.main.humidity}</div>
                <div>Pressure: {dayWeather.main.pressure}</div>
                <div>Sea level: {dayWeather.main.sea_level}</div>
            </div>
        </Grid>
    );
};

export { HourlyDisplay };
