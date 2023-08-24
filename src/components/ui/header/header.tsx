import { useContext } from "react";
import { useAppDispatch, useAppSelector } from "reduxFolder";
import { addToFavorites } from "reduxFolder/reducers/currentWeather";
import styled from "styled-components";

import { ButtonAddFav } from "components/shared/btns/btnAddToFav";
import { ButtonLogIn } from "components/shared/btns/buttonHeader";
import { Select } from "components/shared/select/select";
import { CustomizedSwitches } from "components/shared/switcher/switcher";

import { ThemeContext } from "../../../Context/themeContext";

import { Logo } from "./logo/logoWrapper";

const HeaderDiv = styled.header`
  min-height: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 64px 20px 64px;
  @media (max-width: 967px) {
    padding: 0px;
    gap: 5px;
    flex: 30%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
    gap: 20px;
  }
  @media (max-width: 421px) {
    padding: 5px;
    gap: 7px;
  }
`;

export function Header() {
  const { styles } = useContext(ThemeContext);
  const dataFromRedux = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(addToFavorites(dataFromRedux.currentWeather.location.name));
  };
  return (
    <>
      <HeaderDiv>
        <Logo themeStyle={styles} />
        <Select />
        <ButtonLogIn themeStyle={styles} />
        <ButtonAddFav onClick={handleClick} themeStyle={styles} />
        <CustomizedSwitches />
      </HeaderDiv>
    </>
  );
}
