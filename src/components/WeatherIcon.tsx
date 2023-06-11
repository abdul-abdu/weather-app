import React from 'react';

type Props = { icon: string };

export const WeatherIcon = ({ icon }: Props): JSX.Element => (
    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
);
