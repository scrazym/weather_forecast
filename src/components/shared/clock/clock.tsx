import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "Context/themeContext";

import { StyledTextH2 } from "../h2/h2Main";

export const Clock = () => {
  function Clock1() {
    const [date, setDate] = useState(new Date());
    const { styles } = useContext(ThemeContext);

    function refreshClock() {
      setDate(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);
    return (
      <StyledTextH2 themeStyle={styles} color={"#FFF"}>
        {"Time: " + date.toLocaleTimeString()}
      </StyledTextH2>
    );
  }
  return Clock1();
};
