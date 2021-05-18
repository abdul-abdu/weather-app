import React from "react";
import { ICurrentWeather, IDaily } from "../types";
import { Grid, Typography } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Moment from "react-moment";
import GridLayout from "../layouts/GridLayout";
import { WeatherIcon } from "./WeatherIcon";

interface ITodaysProps {
	current: ICurrentWeather;
	daily?: IDaily;
	tzOffset?: number;
}

export const TodaysWeather = ({
	current: {
		temp,
		feels_like,
		humidity,
		pressure,
		wind_deg,
		wind_speed,
		sunrise,
		sunset,
	},
	daily,
	tzOffset,
}: ITodaysProps) => (
	<GridLayout>
		<Grid item xs={12} sm={6} md={6}>
			<Typography variant="h5">Today</Typography>
			<Typography variant="h3">{Math.round(temp)}°</Typography>
		</Grid>

		<Grid item xs={12} sm={6} md={6}>
			{[
				["Feels like:", `${Math.round(feels_like)}°`],
				["Humidity:", `${Math.round(humidity)}%`],
				["Pressure:", `${Math.round(pressure)}hPa`],
				["Wind:", `${wind_deg}, ${wind_speed} m/s`],
			].map(([datum, value], idx) => (
				<div key={idx}>
					<span>{datum}</span>
					<span>{value}</span>
				</div>
			))}
		</Grid>

		<Grid item xs={12} md={12}>
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				{daily && (
					<>
						<div>
							<ArrowUpwardIcon style={{ transform: "scale(0.75)" }} />
							<div>
								Max Temp:
								{`${daily.temp.max}°`}
							</div>
						</div>
						<div>
							<ArrowDownwardIcon style={{ transform: "scale(0.75)" }} />
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
	</GridLayout>
);
