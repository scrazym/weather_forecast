import { NavLink } from "react-router-dom";

import facebook from "../../../../assets/loginForm/icons/Facebook.png";
import github from "../../../../assets/loginForm/icons/Github.png";
import google from "../../../../assets/loginForm/icons/Google.png";

interface LinkProps {
  link: string;
  src: string;
  alt: string;
}
function LinkUser({ link, src, alt }: LinkProps) {
  return (
    <div className={"form__sign-item"}>
      <a href={link}>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
}
export function SignWith() {
  return (
    <div className={"form__sign"}>
      <p className={"form__sign-descr"}>or continue with</p>
      <div className={"form__sign-wrapper"}>
        <LinkUser
          link={"https://www.google.com"}
          src={google}
          alt={"google-icon"}
        />
        <LinkUser
          link={"https://www.github.com"}
          src={github}
          alt={"github-icon"}
        />
        <LinkUser
          link={"https://www.facebook.com"}
          src={facebook}
          alt={"facebook-icon"}
        />
      </div>
      <div className={"form__sign-footer"}>
        <p className={"form__sign-descr"}>Don’t have an account yet?</p>
        <NavLink to="/signup">
          <p className={"form__sign-descr"}>Sign up for free</p>
        </NavLink>
      </div>
    </div>
  );
}
