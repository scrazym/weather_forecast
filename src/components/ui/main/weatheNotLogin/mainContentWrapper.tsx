import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import styled from "styled-components";

import { Day } from "components/shared/clock/day";
import { StyledTextH2 } from "components/shared/h2/h2Main";
import { Header } from "components/ui/header/header";

import { Tabs } from "../tabs/mainTabs";
import { WeatherCard } from "../weatherCardSmall/weatherCard/weatherCard";

import { MainContentFullDescr } from "./mainContentFullDescr/mainContentFullDescr";
import { MainTitleWrapper } from "./mainContentTitleWraper";
import { MainDateWrapper } from "./Time";

export const MainContentWraperS = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  padding: 25px 45px;
  max-width: 1088px;
  background-color: rgba(255, 255, 255, 0.25);
  -webkit-box-shadow: 12px 12px 25px 2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 12px 12px 25px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 12px 12px 25px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-top: 1px;
    padding: 2px;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
`;

export const MainContentWraper = () => {
  const { styles } = useContext(ThemeContext);

  return (
    <>
      <Tabs />
      <MainContentWraperS>
        <MainTitleWrapper></MainTitleWrapper>

        <StyledTextH2 themeStyle={styles} text={"WEATHER NOW"}></StyledTextH2>
        <Day></Day>
        <MainDateWrapper></MainDateWrapper>
        <MainContentFullDescr></MainContentFullDescr>
      </MainContentWraperS>
      <WeatherCard themeStyle={styles}></WeatherCard>
    </>
  );
};
