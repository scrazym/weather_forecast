import { IUserTheme } from "Context/themeContext/theme";
import styled from "styled-components";

export const ContainerBg = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 20px 60px 20px;
  background: ${(props: { themeStyle: { background: string } }) =>
    props.themeStyle?.background};
`;

export function ContainerBgWrapper({
  children,
  themeStyle,
}: {
  children: React.ReactNode;
  themeStyle: IUserTheme | undefined;
}) {
  return <ContainerBg themeStyle={themeStyle}>{children}</ContainerBg>;
}
