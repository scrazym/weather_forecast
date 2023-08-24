import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SUserLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 25px;
  height: 20px;
  overflow: hidden;
  background-color: aqua;
  border-radius: 10px;
  padding: 2px 3px;
  transition: all 0.4s ease-in-out;
  &:hover {
    width: 120px;
    cursor: pointer;
  }
`;
interface ILink {
  text: string;
  children: React.ReactNode;
  url: string;
}
export const UserLink = (props: ILink) => {
  return (
    <NavLink to={props.url}>
      <SUserLink {...props}>
        {props.children}
        <p>{props.text}</p>
      </SUserLink>
    </NavLink>
  );
};
