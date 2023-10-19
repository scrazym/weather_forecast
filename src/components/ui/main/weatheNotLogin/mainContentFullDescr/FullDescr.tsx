import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";

import { StyledTextH2 } from "components/shared/h2/h2Main";
import { StyledTextP } from "components/shared/paragraph/styledP";
import { StyledIconWrapper } from "components/shared/wrapper/ConditionIconWrapper";
import { DescrWrapperS } from "components/shared/wrapper/StyledDescrWrapper";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import barometr from "../../../../../assets/icons/barometr.png";
import wikness from "../../../../../assets/icons/wikness.png";
import windSpeed from "../../../../../assets/icons/windLine.png";

export const FullDescrText = () => {
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather } = dataFromRedux;
  const { current } = currentWeather;
  const { styles } = useContext(ThemeContext);
  return (
    <DescrWrapperS
      width={"30%"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      gap={"5px"}
    >
      <StyledTextH2
        themeStyle={styles}
        fontSize={"22px"}
        fontWeight={"700"}
        text={`${current.condition.text}`}
      ></StyledTextH2>
      <StyledWrapperDiv
        width={"100%"}
        display={"flex"}
        justifycontent={"left"}
        alignitems={"center"}
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
          text={`${current.humidity} %`}
          themeStyle={styles}
        ></StyledTextH2>
      </StyledWrapperDiv>
      <StyledWrapperDiv
        width={"100%"}
        display={"flex"}
        justifycontent={"left"}
        alignitems={"center"}
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
          text={`${current.wind_kph} km/h  ${current.wind_dir}`}
        ></StyledTextH2>
      </StyledWrapperDiv>
      <StyledWrapperDiv
        width={"100%"}
        display={"flex"}
        justifycontent={"left"}
        alignitems={"center"}
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
          text={`${current.pressure_mb} mm`}
        ></StyledTextH2>
      </StyledWrapperDiv>
    </DescrWrapperS>
  );
};
