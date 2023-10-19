import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { ThemeContext } from "Context/themeContext";
import { useAppSelector } from "reduxFolder";

import { currentHourFromApi } from "components/shared/clock/getHour";
import { Container } from "components/shared/container";
import { H2Style } from "components/shared/h2/h2Main";
import { StyledTextP } from "components/shared/paragraph/styledP";
import { StyledIconWrapper } from "components/shared/wrapper/ConditionIconWrapper";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import { responsive } from "../weatherCardSmall/weatherCard/slider/slider";

export const WeatherCardHours = (props: H2Style) => {
  const dataFromRedux = useAppSelector((state) => state);
  const { weatherHour } = dataFromRedux;
  const { forecast }: any = weatherHour;

  const { styles } = useContext(ThemeContext);

  console.log(weatherHour, "from cardHour");

  return (
    <>
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
        {forecast.forecastday[0].hour.map((item: any) => {
          return (
            <StyledWrapperDiv
              {...props}
              width={"120px"}
              height={"150px"}
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
                text={currentHourFromApi(item.time)}
              ></StyledTextP>
              <StyledIconWrapper
                width={"70px"}
                height={"70px"}
                url={item.condition.icon}
              ></StyledIconWrapper>
              <StyledTextP
                themeStyle={styles}
                text={`${item.temp_c} \u00b0C`}
              ></StyledTextP>
            </StyledWrapperDiv>
          );
        })}
      </Carousel>
    </>
  );
};
