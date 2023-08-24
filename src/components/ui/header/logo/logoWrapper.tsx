import { NavLink } from "react-router-dom";
import { IUserTheme } from "Context/themeContext/theme";
import styled from "styled-components";

import { TextFz } from "components/consts/textSize";

import logo from "../../../../assets/icons/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LogoTextWrapper = styled.h2`
  display: block;
  width: 180px;
  font-family:Roboto,sans
  font-size: ${TextFz.BIG};
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  padding:10px;
  color:${(props: { themeStyle: { textColor: string } }) =>
    props.themeStyle?.textColor};
    @media (max-width:768px) {
      font-size:${TextFz.MEDIUM}
    }
    @media (max-width:421px) {
      font-size:${TextFz.SMALL}
    }
`;
const LogoImgWrapper = styled.div`
  width: 44px;
  height: 44px;
  padding: 10px;
  background-color: rgba(102, 204, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export function Logo({ themeStyle }: { themeStyle: IUserTheme | undefined }) {
  return (
    <NavLink to="https://github.com/scrazym/weather_forecast">
      <LogoWrapper>
        <LogoImgWrapper>
          <img src={logo} alt="logo" />
        </LogoImgWrapper>
        <LogoTextWrapper themeStyle={themeStyle}>Daily weather</LogoTextWrapper>
      </LogoWrapper>
    </NavLink>
  );
}
