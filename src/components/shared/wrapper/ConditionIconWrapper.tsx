import styled from "styled-components";

import { IconSize } from "components/consts/IconSize";

import { ImageWrapperProps, ImgWrapper } from "../imageWrapperStyled";

export const ConditionIconWrapper = styled(ImgWrapper)`
  width: ${IconSize.LARGE};
  height: ${IconSize.LARGE};
  @media (max-width: 968px) {
    width: ${IconSize.MEDIUM};
    height: ${IconSize.MEDIUM};
  }
  @media (max-width: 768px) {
    width: ${IconSize.SMALL};
    height: ${IconSize.SMALL};
  }
`;

export const StyledIconWrapper = (props: ImageWrapperProps) => {
  return <ConditionIconWrapper {...props}></ConditionIconWrapper>;
};
