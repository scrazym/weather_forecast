import { createContext, useState } from "react";

import { IUserTheme, Themes, UserThemeType } from "./theme";

interface Props {
  theme: UserThemeType;
  styles?: IUserTheme;
  toggleTheme: () => void;
  setThemeUser: (value: UserThemeType) => void;
  userStyles?: IUserTheme;
}

export const ThemeContext = createContext({} as Props);

export default interface ThemeProviderChild {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderChild) => {
  const [isDark, setDark] = useState(false);
  const [userTheme, setUserTheme] = useState<UserThemeType>("dark");

  const setThemeUser = (value: UserThemeType) => {
    setUserTheme(value);
  };

  const toggleTheme = () => {
    setDark(!isDark);
    switch (isDark) {
      case true:
        setUserTheme("dark");
        break;
      case false:
        setUserTheme("light");
        break;
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: userTheme,
        toggleTheme: toggleTheme,
        styles: Themes[userTheme],
        setThemeUser: setThemeUser,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
