import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import { MoreFullDescrText } from "./moreFullDescr";

export const MoreContentFullDescr = () => {
  return (
    <StyledWrapperDiv
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={"20px"}
      width={"100%"}
    >
      <MoreFullDescrText></MoreFullDescrText>
    </StyledWrapperDiv>
  );
};
