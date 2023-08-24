import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";

import { StyledTextH2 } from "components/shared/h2/h2Main";
import { MainTempratureText } from "components/shared/h2/MainTemprature";
import { StyledImgWrapper } from "components/shared/imageWrapperStyled";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import { FullDescrText } from "./FullDescr";
export const MainContentFullDescr = () => {
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather } = dataFromRedux;
  const { current } = currentWeather;
  const { styles } = useContext(ThemeContext);

  return (
    <StyledWrapperDiv
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={"20px"}
      width={"100%"}
    >
      <StyledImgWrapper
        url={currentWeather.current.condition.icon}
        width={"200px"}
        height={"200px"}
        padding={"30px"}
      ></StyledImgWrapper>
      <MainTempratureText
        themeStyle={styles}
        text={`${Math.round(current.temp_c)} \u00b0C`}
      ></MainTempratureText>
      <FullDescrText></FullDescrText>
    </StyledWrapperDiv>
  );
};
