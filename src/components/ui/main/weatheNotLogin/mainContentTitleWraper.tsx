import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";
import styled from "styled-components";

import { TextFz } from "components/consts/textSize";
import { StyledTextH2 } from "components/shared/h2/h2Main";

import { MainLogo } from "./geoLogoWrapper";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const MainTitleWrapper = () => {
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather } = dataFromRedux;
  const { styles } = useContext(ThemeContext);
  return (
    <TitleWrapper>
      <MainLogo />
      <StyledTextH2 themeStyle={styles} fontSize={TextFz.MEDIUM}>
        {currentWeather.location.tz_id}
      </StyledTextH2>
    </TitleWrapper>
  );
};
