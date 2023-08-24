import styled from "styled-components";

import { StyledWrapper } from "./StyledWrapper";

export const DescrWrapperS = styled(StyledWrapper)`
  flex-direction: column;
  @media (max-width: 968px) {
  }
  @media (max-width: 571px) {
    width: 30%;
    gap: 2px;
  }
  @media (max-width: 410px) {
    width: 50%;
    gap: 2px;
  }
`;
