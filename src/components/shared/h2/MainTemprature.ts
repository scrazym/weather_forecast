import styled from "styled-components";

import { TextFz } from "components/consts/textSize";

import { StyledTextH2 } from "./h2Main";

export const MainTempratureText = styled(StyledTextH2)`
  font-size: ${TextFz.LARGE};
  @media (max-width: 968px) {
    font-size: ${TextFz.XS};
  }
  @media (max-width: 568px) {
    font-size: ${TextFz.BIG};
  }
  @media (max-width: 410px) {
    font-size: ${TextFz.SMALL};
  }
`;
