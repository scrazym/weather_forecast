import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";

import { StyledTextH2 } from "../h2/h2Main";

export const day = () => {
  let day = new Date().getDay().toString();
  switch (day) {
    case "0":
      day = "Sunday";
      break;
    case "1":
      day = "Monday";
      break;
    case "2":
      day = "Tuesday";
      break;
    case "3":
      day = "Wednesday";
      break;
    case "4":
      day = "Thursday";
      break;
    case "5":
      day = "Friday";
      break;
    case "6":
      day = "Saturday";
      break;
  }
  return day;
};

export const Day = () => {
  const { styles } = useContext(ThemeContext);

  const currentDate = new Date().toLocaleDateString();

  return (
    <StyledTextH2
      themeStyle={styles}
      text={`${"Today: " + day() + " " + currentDate}`}
    ></StyledTextH2>
  );
};
