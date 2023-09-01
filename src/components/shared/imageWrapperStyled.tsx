import styled from "styled-components";

import { ImgWrapperSize } from "components/consts/imgSizeWrapper";

export interface ImageWrapperProps {
  width: string;
  height: string;
  padding?: string;
  url: string;
}
export const ImgWrapper = styled.div`
  width: ${ImgWrapperSize.LARGE};
  height: ${ImgWrapperSize.LARGE};
  padding: ${(props: ImageWrapperProps) => props.padding};
  background-image: url(${(props: ImageWrapperProps) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    width: ${ImgWrapperSize.MEDIUM};
    height: ${ImgWrapperSize.MEDIUM};
    padding: 5px;
  }
  @media (max-width: 465px) {
    width: ${ImgWrapperSize.SMALL};
    height: ${ImgWrapperSize.SMALL};
    padding: 5px;
`;

export const StyledImgWrapper = (props: ImageWrapperProps) => {
  return <ImgWrapper {...props}></ImgWrapper>;
};
