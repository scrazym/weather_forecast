import { IUserTheme } from "Context/themeContext/theme";
import styled from "styled-components";

import { FontWeit } from "components/consts/FontWeitText";
import { TextFz } from "components/consts/textSize";

export interface H2Style {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  lineHeight?: string;
  text?: string;
  children?: React.ReactNode;
  themeStyle: IUserTheme | undefined;
  onClick?: any;
}
export const StyledH2 = styled.h2`
  font-size: ${(props: H2Style) => props.fontSize} || ${TextFz.BIG};
  margin: 0;
  color: ${(props: H2Style) => props.themeStyle?.textColor};
  font-weight: ${(props: H2Style) => props.fontWeight} || ${FontWeit.LARGE};
  @media (max-width: 978px) {
    font-size: ${TextFz.MEDIUM};
    font-weight: ${FontWeit.MEDIUM};
  }
  @media (max-width: 568px) {
    font-size: ${TextFz.SMALL};
    font-weight: ${FontWeit.SMALL};
  }
`;
export const StyledTextH2 = (props: H2Style) => {
  return (
    <StyledH2 {...props}>
      {props.text}
      {props.children}
    </StyledH2>
  );
};
