import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { TodaysWeather } from "../../components";
import { CurrentDay } from "../../contexts";

interface Props {}

export default function Details({}: Props): ReactElement {
	const { currentDayInfo } = useContext(CurrentDay);

	console.log(currentDayInfo);

	return (
		<div>
			<Link to="/">Home</Link>

			<TodaysWeather current={currentDayInfo} />
		</div>
	);
}
