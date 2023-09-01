import styled from "styled-components";

import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

export const MoreDescWrapper = styled(StyledWrapperDiv)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 796px) {
    flex-wrap: wrap;
  }
`;
