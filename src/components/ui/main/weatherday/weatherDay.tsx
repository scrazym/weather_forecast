import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";

import { BtnReturn } from "components/shared/btns/btnReturnMain";

import { DayContentWraper } from "./conteinerDay";

export const WeatherDay = () => {
  const { styles } = useContext(ThemeContext);

  return (
    <>
      <BtnReturn themeStyle={styles} />
      <DayContentWraper />
    </>
  );
};
