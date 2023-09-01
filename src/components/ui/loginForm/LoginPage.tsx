import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "Context/AuthContext";

import Icon from "../../../assets/loginForm/bg/Illustration.png";
import cactus from "../../../assets/loginForm/img/cactus.png";
import girl from "../../../assets/loginForm/img/formBgGirl.png";

import { ErrorMsg } from "./components/ErrorMsg";
import { CreateFormImg } from "./components/formImage";
import { CreateInput } from "./components/FormInput";
import { SignWith } from "./components/formSignWith";

import "../../../style/blocks/main.css";

export function CreateLoginPage() {
  const { logIn } = useContext(AuthContext);
  const regPsw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

  const [userName, setUserName] = useState<string>("");
  const [nameErr, setNameErr] = useState(false);

  const [password, setPassword] = useState<string>("");
  const [passErr, setPassErr] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const isValid = nameErr || passErr || !isChecked;
  const navigate = useNavigate();
  const dataFromCheckAuth = useLocation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const user = form.name.value;
    const pass = form.password.value;
    logIn(user, pass, () => navigate(`/weather_forecast`, { replace: true }));
  };
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.id) {
      case "name":
        setUserName(e.target.value);
        break;
      case "psw":
        setPassword(e.target.value);
        break;
      case "form_checkbox":
        setIsChecked(!isChecked);
    }
  }

  function handleBlur(e: React.ChangeEvent<HTMLInputElement>) {
    switch (e.target.id) {
      case "name":
        userName.length < 4 ? setNameErr(true) : setNameErr(false);
        break;
      case "psw":
        regPsw.test(password) ? setPassErr(false) : setPassErr(true);
    }
  }

  return (
    <div className={"form__container container"}>
      <div className={"form__wrapper form__wrapper_login"}>
        <h1 className={"form__title"} id={"form__title"}>
          Welcome
        </h1>
        <CreateFormImg classList={"form__icon"} alt={"work man"} src={Icon} />
        <h2 className={"form__descr"}>Log In</h2>
        <form
          action="react_vacily/src/components/userLog"
          method="get"
          className="form__example"
          onSubmit={handleSubmit}
        >
          <CreateInput
            type={"text"}
            id={"name"}
            nameInput={"name"}
            labelText={"Login"}
            placeholder={"Enter your Login"}
            classNames={"form__input"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {nameErr && <ErrorMsg message={"Invalid Login!"} />}

          <CreateInput
            type={"password"}
            id={"psw"}
            nameInput={"password"}
            labelText={"Password:"}
            iName={"uil uil-eye-slash toggle"}
            placeholder={"Enter your Password"}
            classNames={"form__input"}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {passErr && (
            <ErrorMsg
              message={"Invalid password!:Min 6 symbols: 1 Uppercase, 1 number"}
            />
          )}
          <CreateInput
            type={"checkbox"}
            id={"form_checkbox"}
            labelText={"I agree with confidential privacy politic of company"}
            classNames={"form__cbx"}
            required={true}
            onChange={handleChange}
          />
          <CreateInput
            type={"submit"}
            id={"form_submit"}
            nameInput={"submit"}
            value={"Log In!"}
            classNames={"form__submit"}
            isDisable={isValid}
          />
        </form>
        <SignWith />
      </div>
      <div className={"form__wrapper form__wrapper_img"}>
        <CreateFormImg
          classList={"form__img"}
          src={cactus}
          alt={"cactus-image"}
        />
        <CreateFormImg
          classList={"form__img form__img-wrapper_main"}
          src={girl}
          alt={"girl-image"}
        />
      </div>
    </div>
  );
}
