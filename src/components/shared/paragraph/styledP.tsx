import styled from "styled-components";

import { H2Style } from "../h2/h2Main";

export const StyledP = styled.p`
  font-size: ${(props: H2Style) => props.fontSize};
  line-height: 32px;
  margin: 0;
  color: ${(props: { themeStyle: { textColor: string } }) =>
    props.themeStyle?.textColor};
  font-weight: ${(props: H2Style) => props.fontWeight};
`;

export const StyledTextP = (props: H2Style) => {
  return <StyledP {...props}>{props.text}</StyledP>;
};
