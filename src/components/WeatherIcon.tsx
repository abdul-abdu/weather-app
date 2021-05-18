import React from "react";

export const WeatherIcon = ({ icon }: any) => (
	<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
);
