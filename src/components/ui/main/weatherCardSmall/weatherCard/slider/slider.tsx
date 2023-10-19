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
    breakpoint: { max: 1024, min: 676 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 676, min: 477 },
    items: 3,
  },
  mobile2: {
    breakpoint: { max: 476, min: 0 },
    items: 1,
  },
};
