import AsyncSelect from "react-select/async";
import { useAppDispatch, useAppSelector } from "reduxFolder";

import { changeName } from "../../../reduxFolder/reducers/currentWeather";
import { StyledWrapperDiv } from "../wrapper/StyledWrapper";

import { StateOption, stateOptions } from "./data";

const filterColors = (inputValue: string) => {
  return stateOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: string) =>
  new Promise<StateOption[]>((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export const Select = () => {
  const dispatch = useAppDispatch();
  const changeCity = (inputValue: any) => {
    dispatch(changeName(inputValue.label));
  };
  return (
    <StyledWrapperDiv width={"35%"} zIndex={10}>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        onChange={changeCity}
      />
    </StyledWrapperDiv>
  );
};
