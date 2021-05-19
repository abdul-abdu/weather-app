import moment from "moment";

export const currentHourlyWeather = (list: any, day: any) =>
	list.filter(
		(hourlyInfo: any) => moment(hourlyInfo.dt * 1000).format("dddd") === day
	);
