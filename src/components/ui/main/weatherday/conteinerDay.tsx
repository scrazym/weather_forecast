import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";
import styled from "styled-components";

import { Day } from "components/shared/clock/day";
import { StyledTextH2 } from "components/shared/h2/h2Main";
import { StyledImgWrapper } from "components/shared/imageWrapperStyled";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import { MainTitleWrapper } from "../weatheNotLogin/mainContentTitleWraper";
import { MainContentWraperS } from "../weatheNotLogin/mainContentWrapper";
import { MainDateWrapper } from "../weatheNotLogin/Time";

import { WeatherCardHors } from "./cardHour";
import { MoreContentFullDescr } from "./descrMore";

const ContainerMoreInfo = styled(MainContentWraperS)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const DayContentWraper = () => {
  const { styles } = useContext(ThemeContext);
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather } = dataFromRedux;
  const { current } = currentWeather;

  return (
    <>
      <ContainerMoreInfo>
        <StyledWrapperDiv
          width={"50%"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="25px"
        >
          <MainTitleWrapper></MainTitleWrapper>
          <StyledTextH2 themeStyle={styles} text={"WEATHER NOW"}></StyledTextH2>
          <Day></Day>
          <MainDateWrapper></MainDateWrapper>
        </StyledWrapperDiv>
        <StyledWrapperDiv
          display={"flex"}
          flexDirection="column"
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"20px"}
          width={"350px"}
        >
          <StyledTextH2
            themeStyle={styles}
            fontSize={"12px"}
            fontWeight={"400"}
            text={`${Math.round(current.temp_c)} \u00b0C`}
            color={"#fff"}
          ></StyledTextH2>
          <StyledImgWrapper
            url={currentWeather.current.condition.icon}
            width={"200px"}
            height={"200px"}
            padding={"30px"}
          ></StyledImgWrapper>
        </StyledWrapperDiv>
        <MoreContentFullDescr></MoreContentFullDescr>
      </ContainerMoreInfo>
      <WeatherCardHors themeStyle={styles}></WeatherCardHors>
    </>
  );
};
