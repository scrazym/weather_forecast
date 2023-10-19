import styled from "styled-components";
interface IWrapperProps {
  width?: string;
  width320?: string;
  height?: string;
  display?: string;
  flexdirection?: string;
  justifycontent?: string;
  alignitems?: string;
  gap?: string;
  background?: string;
  borderradius?: string;
  border?: string;
  padding?: string;
  children?: React.ReactNode;
  zIndex?: number;
}
export const StyledWrapper = styled.div`
  display: ${(props: IWrapperProps) => props.display};
  flex-wrap: nowrap;
  flex-direction: ${(props: IWrapperProps) => props.flexdirection};
  justify-content: ${(props: IWrapperProps) => props.justifycontent};
  align-items: ${(props: IWrapperProps) => props.alignitems};
  gap: ${(props: IWrapperProps) => props.gap};
  width: ${(props: IWrapperProps) => props.width};
  height: ${(props: IWrapperProps) => props.height};
  background-color: ${(props: IWrapperProps) => props.background};
  border: ${(props: IWrapperProps) => props.border};
  border-radius: ${(props: IWrapperProps) => props.borderradius};
  padding: ${(props: IWrapperProps) => props.padding};
  z-index: ${(props: IWrapperProps) => props.zIndex};
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 4px;
    width: ${(props: IWrapperProps) => props.width320};
  }
`;

export const StyledWrapperDiv = (props: IWrapperProps) => {
  return <StyledWrapper {...props}></StyledWrapper>;
};
