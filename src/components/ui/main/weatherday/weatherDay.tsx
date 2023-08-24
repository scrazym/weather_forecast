import { useContext, useEffect } from "react";
import { ThemeContext } from "Context/themeContext";
import { useAppDispatch, useAppSelector } from "reduxFolder";
import {
  fetchWeatherCurrent,
  fetchWeatherHour,
} from "reduxFolder/reducers/currentWeather";

import { BtnReturn } from "components/shared/btns/btnReturnMain";
import { StyledH2 } from "components/shared/h2/h2Main";

import { DayContentWraper } from "./conteinerDay";

export const WeatherDay = () => {
  const dispatch = useAppDispatch();
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather } = dataFromRedux;
  const { location } = currentWeather;
  const { name } = location;

  const { styles } = useContext(ThemeContext);

  return (
    <>
      <BtnReturn themeStyle={styles} />
      <DayContentWraper />
    </>
  );
};
