import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";
import styled from "styled-components";

import { Day } from "components/shared/clock/day";
import { StyledTextH2 } from "components/shared/h2/h2Main";
import { MainTempratureText } from "components/shared/h2/MainTemprature";
import { StyledImgWrapper } from "components/shared/imageWrapperStyled";

import { MainTitleWrapper } from "../weatheNotLogin/mainContentTitleWraper";
import { MainDateWrapper } from "../weatheNotLogin/Time";

const StyledWrapperDateInfo = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

export const DateInfo = () => {
  const { styles } = useContext(ThemeContext);
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather } = dataFromRedux;
  const { current } = currentWeather;
  return (
    <StyledWrapperDateInfo>
      <MainTitleWrapper></MainTitleWrapper>
      <StyledTextH2 themeStyle={styles} text={"WEATHER NOW"}></StyledTextH2>
      <Day></Day>
      <MainDateWrapper></MainDateWrapper>
      <StyledImgWrapper
        url={currentWeather.current.condition.icon}
        width={"200px"}
        height={"200px"}
        padding={"30px"}
      />
      <MainTempratureText
        themeStyle={styles}
        fontWeight={"400"}
        text={`${Math.round(current.temp_c)} \u00b0C  `}
        color={"#fff"}
      />
      <StyledTextH2 themeStyle={styles} text={`${current.condition.text}`} />
    </StyledWrapperDateInfo>
  );
};
