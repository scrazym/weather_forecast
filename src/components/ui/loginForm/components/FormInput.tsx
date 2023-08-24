import React, { ChangeEvent } from "react";

import { HandleShowPsw } from "./handle";

interface InputProps {
  type: string;
  id: string;
  required?: boolean;
  nameInput?: string;
  labelText?: string;
  value?: string;
  iName?: string;
  placeholder?: string;
  classNames?: string;
  onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisable?: boolean;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function CreateInput({
  type,
  id,
  required = true,
  nameInput = "",
  labelText = "",
  value,
  iName,
  placeholder,
  classNames,
  onChange,
  isDisable,
  onBlur,
}: InputProps) {
  return (
    <div className={"form-wrapper form-wrapper_" + classNames}>
      <label htmlFor={nameInput} className={"form__label"}>
        {" "}
        {labelText}{" "}
      </label>
      <input
        type={type}
        name={nameInput}
        id={id}
        required={required}
        value={value}
        placeholder={placeholder}
        className={classNames}
        autoComplete={"family-name"}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isDisable}
      />
      <i onClick={HandleShowPsw} className={iName}></i>
    </div>
  );
}
