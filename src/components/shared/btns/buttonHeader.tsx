import { NavLink } from "react-router-dom";
import { useAuth } from "Context/AuthContext";
import { IUserTheme } from "Context/themeContext/theme";
import styled from "styled-components";

export const StyledButton = styled.button`
  width: clamp(110px, 150px, 400px);
  height: 40px;
  color: ${(props: { themeStyle: { textColor: string } }) =>
    props.themeStyle?.textColor};
  border: ${(props: { themeStyle: { btnBorder: string } }) =>
    props.themeStyle?.btnBorder};
  border-radius: 5px;
  background: none;
  font-weight: ${(props: { themeStyle: { fontWeight: string } }) =>
    props.themeStyle?.fontWeight};
  transition: all 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    color: aqua;
    border: 2px solid purple;
    transform: scale(1.05);
    -webkit-box-shadow: 15px 16px 12px 0px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 15px 16px 12px 0px rgba(34, 60, 80, 0.6);
    box-shadow: 15px 16px 12px 0px rgba(34, 60, 80, 0.6);
  }
`;
export const ButtonLogIn = ({
  themeStyle,
}: {
  themeStyle: IUserTheme | undefined;
}) => {
  const authInfo = useAuth();
  const { logOut } = authInfo;
  return (
    <>
      <NavLink to={!authInfo.user ? "/login" : "/weather_forecast"}>
        <StyledButton
          themeStyle={themeStyle}
          onClick={authInfo.user ? logOut : null}
        >
          {!authInfo.user ? "Log In" : "Log out"}
        </StyledButton>
      </NavLink>
    </>
  );
};
