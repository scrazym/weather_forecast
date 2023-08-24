import { useAuth } from "Context/AuthContext";
import styled from "styled-components";

export const StyledButton = styled.button`
  width: clamp(110px, 200px, 400px);
  height: 40px;
  color: ${(props: { themeStyle: { textColor: string } }) =>
    props.themeStyle?.textColor};
  border: ${(props: { themeStyle: { btnBorder: string } }) =>
    props.themeStyle?.btnBorder};
  border-radius: 5px;
  background: none;
  font-weight: ${(props: { themeStyle: { fontWeight: string } }) =>
    props.themeStyle?.fontWeight};
  &:hover {
    cursor: pointer;
    color: aqua;
    border: 2px solid purple;
    transform: scale(1.05);
    animation: ease-in-out;
    transition: all 0.4s;
    -webkit-box-shadow: 15px 16px 12px 0px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 15px 16px 12px 0px rgba(34, 60, 80, 0.6);
    box-shadow: 15px 16px 12px 0px rgba(34, 60, 80, 0.6);
  }
`;
export const ButtonAddFav = (props: any) => {
  const authInfo = useAuth();
  const { user } = authInfo;

  if (user) {
    return <StyledButton {...props}>Add to Favourites</StyledButton>;
  } else {
    return <></>;
  }
};
