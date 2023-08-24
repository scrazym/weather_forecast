import { useContext } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import { ThemeContext } from "Context/themeContext";
import styled from "styled-components";

export const MainLogoWrapper = styled.div`
  width: 25px;
  height: 25px;
  z-index: 2;
`;

export const MainLogo = () => {
  const { styles } = useContext(ThemeContext);
  return (
    <MainLogoWrapper themeStyle={styles}>
      <PlaceIcon sx={{ color: styles?.textColor }}></PlaceIcon>
    </MainLogoWrapper>
  );
};
