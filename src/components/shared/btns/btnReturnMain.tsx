import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { H2Style } from "../h2/h2Main";

import { StyledButton } from "./buttonHeader";

const BtnReturnMain = styled(StyledButton)`
  width: 90px;
  height: 35px;
`;

export const BtnReturn = (props: H2Style) => {
  return (
    <NavLink to="/weather_forecast">
      <BtnReturnMain {...props}>Return main</BtnReturnMain>;
    </NavLink>
  );
};
