import styled from "styled-components";

import { Clock } from "components/shared/clock/clock";

export const MainDateDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
`;

export const MainDateWrapper = () => {
  return (
    <div>
      <MainDateDiv>
        <Clock />
      </MainDateDiv>
    </div>
  );
};
