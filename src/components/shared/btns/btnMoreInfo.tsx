import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { H2Style } from "../h2/h2Main";

import { StyledButton } from "./buttonHeader";

const BtnMoreInfoS = styled(StyledButton)`
  width: 70px;
  height: 35px;
`;

export const BtnMoreInfo = (props: H2Style) => {
  return (
    <NavLink to="/more">
      <BtnMoreInfoS {...props}>More</BtnMoreInfoS>
    </NavLink>
  );
};
