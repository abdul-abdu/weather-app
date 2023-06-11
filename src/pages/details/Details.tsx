import { Button, Grid } from "@material-ui/core";
import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { TodaysWeather } from "../../components";
import { HourlyDisplay } from "../../components/HourlyDisplay";
import { CurrentCityContext, CurrentDay } from "../../contexts";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function Details(): ReactElement {
  const { currentDayInfo } = useContext(CurrentDay);
  const { currentCityInfo } = useContext(CurrentCityContext);
  const { day }: any = useParams();

  const currentHourlyWeather = () =>
    currentCityInfo?.list.filter(
      (hourlyInfo: any) => moment(hourlyInfo.dt * 1000).format("dddd") === day
    );

  return (
    <div className="home">
      <Button variant="contained" color="secondary" component={Link} to="/">
        Home
      </Button>
      <br />
      <br />
      <br />
      <TodaysWeather current={currentDayInfo} today={false} />

      <Grid container justifyContent="center">
        {currentHourlyWeather()?.map((weather: any, idx: number) => (
          <HourlyDisplay dayWeather={weather} key={idx} />
        ))}
      </Grid>
    </div>
  );
}
