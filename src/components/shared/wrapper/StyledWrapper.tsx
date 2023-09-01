import styled from "styled-components";
interface IWrapperProps {
  width?: string;
  height?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  background?: string;
  borderRadius?: string;
  border?: string;
  padding?: string;
  children?: React.ReactNode;
  zIndex?: number;
}
export const StyledWrapper = styled.div`
  display: ${(props: IWrapperProps) => props.display};
  flex-wrap: wrap;
  flex-direction: ${(props: IWrapperProps) => props.flexDirection};
  justify-content: ${(props: IWrapperProps) => props.justifyContent};
  align-items: ${(props: IWrapperProps) => props.alignItems};
  gap: ${(props: IWrapperProps) => props.gap};
  width: ${(props: IWrapperProps) => props.width};
  height: ${(props: IWrapperProps) => props.height};
  background-color: ${(props: IWrapperProps) => props.background};
  border: ${(props: IWrapperProps) => props.border};
  border-radius: ${(props: IWrapperProps) => props.borderRadius};
  padding: ${(props: IWrapperProps) => props.padding};
  z-index: ${(props: IWrapperProps) => props.zIndex};
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 4px;
  }
`;

export const StyledWrapperDiv = (props: IWrapperProps) => {
  return <StyledWrapper {...props}></StyledWrapper>;
};
