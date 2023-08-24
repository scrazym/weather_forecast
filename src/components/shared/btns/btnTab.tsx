import styled from "styled-components";

export const StyledTab = styled.button`
  type: button;
  border: none;
  width: 140px;
  height: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background: none;

  &:hover {
    border: none;
    border-bottom: 2px solid blue;
  }
`;

export const Tab = (props: any) => {
  return (
    <>
      <StyledTab {...props}>{props.value}</StyledTab>
    </>
  );
};
