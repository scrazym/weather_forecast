import { useAppDispatch, useAppSelector } from "reduxFolder";
import { changeName } from "reduxFolder/reducers/currentWeather";
import styled from "styled-components";

export const CountrySelect = styled.input`
  width: 415px;
  height: 40px;
  padding: 8px, 115px, 8px, 16px;
  gap: 16px;
  opacity: 50%;
  background-color: #ffffff;
  border: none;
  &.placeholder {
    color: #000;
  }
`;

interface SelectType {
  placeholder: string;
}

export function CountrySelectInput({ placeholder }: SelectType): JSX.Element {
  const dataFromRedux = useAppSelector((state) => state);
  // let { city } = dataFromRedux;
  const dispatch = useAppDispatch();
  const changeCity = (e: any) => {
    dispatch(changeName(e.target.value));
    console.log(dataFromRedux.currentWeather.location.name);
  };
  return (
    <>
      <CountrySelect
        placeholder={placeholder}
        onChange={changeCity}
      ></CountrySelect>
    </>
  );
}
