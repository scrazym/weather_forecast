import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";

import { StyledTextH2 } from "../h2/h2Main";

export const day = () => {
  let day = new Date().getDay().toString();
  switch (day) {
    case "0":
      day = "Sun";
      break;
    case "1":
      day = "Mon";
      break;
    case "2":
      day = "Tue";
      break;
    case "3":
      day = "Wed";
      break;
    case "4":
      day = "Thu";
      break;
    case "5":
      day = "Fri";
      break;
    case "6":
      day = "Sat";
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
