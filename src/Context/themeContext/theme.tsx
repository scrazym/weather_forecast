import { TextFz } from "components/consts/textSize";

import bgDark from "../../assets/bg/bgDark.png";
import bgLight from "../../assets/bg/bgLight.png";

export type UserThemeType = "dark" | "light";

export interface IUserTheme {
  background: string;
  fontSizeI: string;
  textColor: string;
  back: string;
  btnBorder: string;
}

export type UserStyles = Record<UserThemeType, IUserTheme>;

export const Themes = {
  light: {
    background: `url(${bgLight})fixed center/cover no-repeat`,
    fontSizeI: "5px",
    textColor: "rgba(0,26,51,0.91)",
    back: "#36c8cc",
    btnBorder: "3px solid #000000",
    fontWeight: "400",
  },
  dark: {
    background: `url(${bgDark}) fixed center/cover no-repeat`,
    fontSizeI: "18px",
    fontWeight: "700",
    textColor: "#FFFFFF",
    back: "#377e6d",
    btnBorder: "2px solid #ffffff",
  },
};
