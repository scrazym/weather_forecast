import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import styled from "styled-components";

import { MainContentWraperS } from "../weatheNotLogin/mainContentWrapper";

import { WeatherCardHours } from "./cardHour";
import { DateInfo } from "./DateInfo";
import { MoreContentFullDescr } from "./descrMore";

const ContainerMoreInfo = styled(MainContentWraperS)`
  flex-wrap: wrap;
  height: 75%;
`;

export const DayContentWraper = () => {
  const { styles } = useContext(ThemeContext);

  return (
    <>
      <ContainerMoreInfo>
        <DateInfo />
        <MoreContentFullDescr></MoreContentFullDescr>
      </ContainerMoreInfo>
      <WeatherCardHours themeStyle={styles}></WeatherCardHours>
    </>
  );
};
