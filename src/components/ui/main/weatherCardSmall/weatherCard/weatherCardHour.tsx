import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { ThemeContext } from "Context/themeContext";
import { useAppDispatch, useAppSelector } from "reduxFolder";

import { currentDayFromApi } from "components/shared/clock/dayFromApi";
import { Container } from "components/shared/container";
import { StyledImgWrapper } from "components/shared/imageWrapperStyled";
import { StyledTextP } from "components/shared/paragraph/styledP";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import { responsive } from "../slider/slider";

export const WeatherCard = (props: any) => {
  const dataFromRedux = useAppSelector((state) => state);
  const { weatherWeek } = dataFromRedux;

  const { styles } = useContext(ThemeContext);

  return (
    <Container>
      <Carousel
        ssr
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={true}
      >
        {weatherWeek.map((item: any) => {
          const handleClick = (item: any) => {
            console.log(item.date);
          };
          return (
            <StyledWrapperDiv
              {...props}
              width={"120px"}
              height={"150px"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              alignItems={"center"}
              gap={"5px"}
              background={`rgba(255, 255, 255, 0.45)`}
              borderRadius={"7px"}
              padding={"5px"}
              key={1}
            >
              <StyledTextP
                {...props}
                themeStyle={styles}
                text={currentDayFromApi(item.date)}
              ></StyledTextP>
              <StyledImgWrapper
                width={"70px"}
                height={"70px"}
                url={item.day.condition.icon}
              ></StyledImgWrapper>
              <StyledTextP
                themeStyle={styles}
                text={`${item.day.avgtemp_c} \u00b0C`}
              ></StyledTextP>
            </StyledWrapperDiv>
          );
        })}
      </Carousel>
    </Container>
  );
};
