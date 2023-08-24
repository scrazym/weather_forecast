import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";

import { StyledImgWrapper } from "components/shared/imageWrapperStyled";
import { StyledTextP } from "components/shared/paragraph/styledP";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import barometr from "../../../../assets/icons/barometr.png";
import wikness from "../../../../assets/icons/wikness.png";
import windSpeed from "../../../../assets/icons/windLine.png";

export const MoreFullDescrText = () => {
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather, weatherHour } = dataFromRedux;
  const { forecast }: any = weatherHour;
  const { current } = currentWeather;
  const { styles } = useContext(ThemeContext);
  return (
    <>
      <StyledWrapperDiv
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        gap={"5px"}
      >
        <StyledTextP
          themeStyle={styles}
          fontSize={"22px"}
          fontWeight={"700"}
          text={`${current.condition.text}`}
        ></StyledTextP>
        <StyledWrapperDiv
          width={"50%"}
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          gap={"25px"}
        >
          <StyledImgWrapper
            url={wikness}
            width={"50px"}
            height={"50px"}
          ></StyledImgWrapper>
          <StyledTextP
            fontSize={"22px"}
            fontWeight={"500"}
            text={`${current.humidity} %`}
            themeStyle={styles}
          ></StyledTextP>
        </StyledWrapperDiv>
        <StyledWrapperDiv
          width={"50%"}
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          gap={"25px"}
        >
          <StyledImgWrapper
            url={windSpeed}
            width={"50px"}
            height={"50px"}
          ></StyledImgWrapper>
          <StyledTextP
            themeStyle={styles}
            fontSize={"22px"}
            fontWeight={"500"}
            text={`${current.wind_kph} km/h  ${current.wind_dir}`}
          ></StyledTextP>
        </StyledWrapperDiv>
        <StyledWrapperDiv
          width={"50%"}
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          gap={"25px"}
        >
          <StyledImgWrapper
            url={barometr}
            width={"50px"}
            height={"50px"}
          ></StyledImgWrapper>
          <StyledTextP
            themeStyle={styles}
            fontSize={"22px"}
            fontWeight={"500"}
            text={`${current.pressure_mb} mm`}
          ></StyledTextP>
        </StyledWrapperDiv>
      </StyledWrapperDiv>
      <StyledTextP
        themeStyle={styles}
        fontSize="22px"
        text={`Sunrise: ${forecast.forecastday[0].astro.sunrise}`}
      />
      <StyledTextP
        themeStyle={styles}
        fontSize="22px"
        text={`Sunset: ${forecast.forecastday[0].astro.sunset}`}
      />
    </>
  );
};
