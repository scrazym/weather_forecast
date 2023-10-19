import { useContext } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "Context/themeContext";

import { StyledTextH2 } from "components/shared/h2/h2Main";
import { UserLink } from "components/shared/links/link";
import { StyledWrapperDiv } from "components/shared/wrapper/StyledWrapper";

export const Contacts = () => {
  const { styles } = useContext(ThemeContext);

  return (
    <div>
      <StyledTextH2
        fontSize="14px"
        themeStyle={styles}
        lineHeight="10px"
        text="Contact Me"
      ></StyledTextH2>
      <StyledWrapperDiv width="30%" display="flex" flexdirection="column">
        <UserLink text={"Facebook"} url="https://facebook.com/mil.grof">
          <FaFacebook />
        </UserLink>
        <UserLink text={"GitHub"} url="https://github.com/scrazym">
          <FaGithub />
        </UserLink>
        <UserLink
          text={"Linkedin"}
          url="https://www.linkedin.com/in/vacily-botsman-9b5634240/"
        >
          <FaLinkedin />
        </UserLink>
      </StyledWrapperDiv>
    </div>
  );
};
