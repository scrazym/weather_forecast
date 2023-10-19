import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";

import { StyledTextH2 } from "components/shared/h2/h2Main";
import { StyledImgWrapper } from "components/shared/imageWrapperStyled";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import { FullDescrTextMore } from "./fullDescrMore";

export const MainContentFullDescr = () => {
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather } = dataFromRedux;
  const { current } = currentWeather;
  const { styles } = useContext(ThemeContext);

  return (
    <StyledWrapperDiv
      display={"flex"}
      justifycontent={"space-between"}
      alignitems={"center"}
      gap={"20px"}
      width={"100%"}
    >
      <StyledImgWrapper
        url={currentWeather.current.condition.icon}
        width={"200px"}
        height={"200px"}
        padding={"30px"}
      ></StyledImgWrapper>
      <StyledTextH2
        themeStyle={styles}
        fontSize={"8em"}
        fontWeight={"900"}
        text={`${Math.round(current.temp_c)} \u00b0C`}
        color={"#fff"}
      ></StyledTextH2>
      <FullDescrTextMore></FullDescrTextMore>
    </StyledWrapperDiv>
  );
};
