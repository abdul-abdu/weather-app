import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { getCity, getWeather } from "../../httpClient";
import { IWeatherResponse } from "../../types";
import {
	ArrowDownward as ArrowDownwardIcon,
	ArrowUpward as ArrowUpwardIcon,
} from "@material-ui/icons";
import { WeatherIcon, TodaysWeather } from "../../components";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import { CurrentDay } from "../../contexts";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	form: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},

	paper: {
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			padding: theme.spacing(4),
		},
		textAlign: "center",
	},

	iconWrapper: {
		width: 55,
		transition: "all 0.4s ease-in-out",
		margin: "0 auto",
		display: "flex",
	},
	changeBtn: {
		position: "absolute",
		top: "50%",
		right: 0,
		transform: "translateY(-50%)",
		borderRadius: 0,
	},
}));

export default function Home() {
	const [weatherData, setWeatherData] = useState<IWeatherResponse | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [country, setCountry] = useState({
		city: "Tashkent",
		country: "Uzbekistan",
	});

	const classes = useStyles();
	const history = useHistory();
	const { setCurrentDayInfo } = useContext(CurrentDay);

	useEffect(() => {
		(async () => {
			try {
				const res = await getCity(country);
				if (res.statusText === "OK") {
					const res_weather = await getWeather(res.data.city);
					setWeatherData(res_weather.data);
					console.log(res_weather.data.daily);
				}
			} catch (error) {
				setError(error.message);
			}
		})();

		return () => {};
	}, [country]);

	const handleCountryCange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCountry({ ...country, [name]: value });
	};

	const setCity = async (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			setCountry(country);
		}
	};

	const onClickDetailsHandler = (day: any) => {
		setCurrentDayInfo(day);
		history.push(`/${day.dt}`);
	};

	return (
		<div className="App">
			<Typography variant="h4">Weather Forecast</Typography>
			<br />
			<form
				className={classes.form}
				noValidate
				autoComplete="off"
				onKeyDown={setCity}
			>
				<TextField
					label="City"
					onChange={handleCountryCange}
					name="city"
					value={country.city}
				/>
				<TextField
					label="Country"
					onChange={handleCountryCange}
					name="country"
					value={country.country}
				/>
				<br />
				<Button variant="contained" color="primary">
					Search
				</Button>
			</form>

			{error && <Alert severity="error">{error}</Alert>}

			{weatherData && (
				<React.Fragment>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<WeatherIcon icon={weatherData.current.weather[0].icon} />

						<div>
							<strong>
								{country.city}, {country.country}
							</strong>
							<br />
							<span style={{ color: "#848d95" }}>
								{weatherData.current.weather[0].description}
							</span>
						</div>
					</div>

					<TodaysWeather
						current={weatherData.current}
						daily={weatherData.daily[0]}
						tzOffset={weatherData.timezone_offset}
					/>

					<div
						style={{
							display: "flex",
							justifyContent: "space-around",
							marginTop: "20px",
						}}
					>
						{weatherData.daily.slice(1, 6).map((dayWeather, key) => (
							<div
								key={key}
								className="day-wheather"
								onClick={() => onClickDetailsHandler(dayWeather)}
							>
								<div>
									<strong>
										<Moment unix format="ddd">
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
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
									}}
								>
									<h5>Avg: {Math.round(dayWeather.temp.day)}°</h5>

									<div>
										<ArrowUpwardIcon style={{ transform: "scale(0.75)" }} />
										<div>max: {Math.ceil(dayWeather.temp.max)}°</div>
									</div>
									<div>
										<ArrowDownwardIcon style={{ transform: "scale(0.75)" }} />
										<div>min: {Math.floor(dayWeather.temp.min)}°</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</React.Fragment>
			)}
		</div>
	);
}
