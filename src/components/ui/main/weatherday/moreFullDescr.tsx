import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";

import { StyledTextH2 } from "components/shared/h2/h2Main";
import { StyledIconWrapper } from "components/shared/wrapper/ConditionIconWrapper";
import { DescrTextWrapper } from "components/shared/wrapper/DescrTextWrapper";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import barometr from "../../../../assets/icons/barometr.png";
import wikness from "../../../../assets/icons/wikness.png";
import windSpeed from "../../../../assets/icons/windLine.png";

import { MoreDescWrapper } from "./moreFullDescrWrap";

export const MoreFullDescrText = () => {
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather, weatherHour } = dataFromRedux;
  const { forecast }: any = weatherHour;
  const { current } = currentWeather;
  const { styles } = useContext(ThemeContext);
  return (
    <>
      <MoreDescWrapper width={"100%"} gap={"5px"}>
        <DescrTextWrapper
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          gap={"25px"}
        >
          <StyledIconWrapper
            url={wikness}
            width={"50px"}
            height={"50px"}
          ></StyledIconWrapper>
          <StyledTextH2
            fontSize={"22px"}
            fontWeight={"500"}
            text={` : ${current.humidity} %`}
            themeStyle={styles}
          ></StyledTextH2>
        </DescrTextWrapper>
        <DescrTextWrapper
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          gap={"25px"}
        >
          <StyledIconWrapper
            url={windSpeed}
            width={"50px"}
            height={"50px"}
          ></StyledIconWrapper>
          <StyledTextH2
            themeStyle={styles}
            fontSize={"22px"}
            fontWeight={"500"}
            text={` : ${current.wind_kph} km/h  ${current.wind_dir}`}
          ></StyledTextH2>
        </DescrTextWrapper>
        <DescrTextWrapper
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          gap={"25px"}
        >
          <StyledIconWrapper
            url={barometr}
            width={"50px"}
            height={"50px"}
          ></StyledIconWrapper>
          <StyledTextH2
            themeStyle={styles}
            fontSize={"22px"}
            fontWeight={"500"}
            text={` : ${current.pressure_mb} mm`}
          ></StyledTextH2>
        </DescrTextWrapper>
        <StyledTextH2
          themeStyle={styles}
          fontSize="22px"
          text={`Sunrise: ${forecast.forecastday[0].astro.sunrise}`}
        />
        <StyledTextH2
          themeStyle={styles}
          fontSize="22px"
          text={`Sunset: ${forecast.forecastday[0].astro.sunset}`}
        />
      </MoreDescWrapper>
    </>
  );
};
