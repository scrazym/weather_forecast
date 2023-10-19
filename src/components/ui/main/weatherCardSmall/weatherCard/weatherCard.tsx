import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";

import { BtnMoreInfo } from "components/shared/btns/btnMoreInfo";
import { currentDayFromApi } from "components/shared/clock/dayFromApi";
import { Container } from "components/shared/container";
import { H2Style } from "components/shared/h2/h2Main";
import { StyledTextP } from "components/shared/paragraph/styledP";
import { StyledIconWrapper } from "components/shared/wrapper/ConditionIconWrapper";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import { responsive } from "../weatherCard/slider/slider";

export const WeatherCard = (props: H2Style) => {
  const dataFromRedux = useAppSelector((state) => state);
  const { weatherWeek } = dataFromRedux;

  const { styles } = useContext(ThemeContext);

  return (
    <>
      {/* // <Container> */}
      {/* <h1>d</h1> */}
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
        swipeable={true}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={true}
      >
        {weatherWeek.map((item: any) => {
          return (
            <StyledWrapperDiv
              {...props}
              width={"120px"}
              height={"200px"}
              display={"flex"}
              flexdirection={"column"}
              justifycontent={"space-around"}
              alignitems={"center"}
              gap={"5px"}
              background={`rgba(255, 255, 255, 0.45)`}
              borderradius={"7px"}
              padding={"5px"}
              key={1}
            >
              <StyledTextP
                {...props}
                themeStyle={styles}
                text={currentDayFromApi(item.date)}
              ></StyledTextP>
              <StyledIconWrapper
                width={"70px"}
                height={"70px"}
                url={item.day.condition.icon}
              ></StyledIconWrapper>
              <StyledTextP
                themeStyle={styles}
                text={`${item.day.avgtemp_c} \u00b0C`}
              ></StyledTextP>
              <BtnMoreInfo themeStyle={styles} />
            </StyledWrapperDiv>
          );
        })}
      </Carousel>
      {/* // </Container> */}
    </>
  );
};
