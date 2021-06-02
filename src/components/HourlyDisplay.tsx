import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import Moment from 'react-moment';
import { WeatherIcon } from '../components';

type HourlyProps = {
    dayWeather: any;
};

const HourlyDisplay = ({ dayWeather }: HourlyProps): ReactElement => {
    return (
        <Grid
            item
            className="day-wheather"
            lg={2}
            md={3}
            sm={4}
            xs={6}
            style={{ margin: '10px 10px 0 10px', padding: '10px 0' }}
        >
            <div>
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
