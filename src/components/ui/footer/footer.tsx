import { useContext } from "react";
import { ThemeContext } from "Context/themeContext";
import styled from "styled-components";

import { Container } from "components/shared/container";
import { StyledTextP } from "components/shared/paragraph/styledP";

import { Logo } from "../header/logo/logoWrapper";

import { Contacts } from "./contacts";
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 20px;
  width: 100%;
  padding: 15px 20px;
  min-height: 80px;
  padding: 15px 120px;
  @media (max-width: 967px) {
    padding: 0px;
    gap: 5px;
    flex: 30%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
    gap: 20px;
    align-items: center;
  }
  @media (max-width: 768px) {
    gap: 5px;
  }
`;
export const Footer = () => {
  const { styles } = useContext(ThemeContext);
  return (
    <StyledFooter>
      <Contacts />
      <StyledTextP
        themeStyle={styles}
        text={`Created by Vacily Botsman in 2023`}
      />
      <Logo themeStyle={styles} />
    </StyledFooter>
  );
};
