import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

import { MoreFullDescrText } from "./moreFullDescr";

export const MoreContentFullDescr = () => {
  return (
    <StyledWrapperDiv
      display={"flex"}
      justifycontent={"space-between"}
      alignitems={"center"}
      gap={"20px"}
      width={"100%"}
    >
      <MoreFullDescrText></MoreFullDescrText>
    </StyledWrapperDiv>
  );
};
