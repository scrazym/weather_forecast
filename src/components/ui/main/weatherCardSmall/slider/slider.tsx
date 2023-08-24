import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
// export const CarouselI = () => {
//   return (
//     <>
//       <Carousel
//         responsive={responsive}
//         additionalTransfrom={0}
//         arrows
//         autoPlaySpeed={3000}
//         centerMode={false}
//         className=""
//         containerClass="container-with-dots"
//         dotListClass=""
//         draggable
//         focusOnSelect={false}
//         infinite
//         itemClass=""
//         keyBoardControl
//         minimumTouchDrag={80}
//         pauseOnHover
//         renderArrowsWhenDisabled={false}
//         renderButtonGroupOutside={false}
//         renderDotsOutside={true}
//       >
//         <h1>ddd</h1>
//       </Carousel>
//     </>
//   );
// };
