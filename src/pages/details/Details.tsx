import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { TodaysWeather } from "../../components";
import { CurrentDay } from "../../contexts";

interface Props {}

export default function Details({}: Props): ReactElement {
	const { currentDayInfo } = useContext(CurrentDay);

	return (
		<div>
			<Link to="/">Home</Link>
			<br />
			<br />
			<br />
			<TodaysWeather current={currentDayInfo} today={false} />
		</div>
	);
}
