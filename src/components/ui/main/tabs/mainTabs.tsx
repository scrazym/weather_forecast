import { useAuth } from "Context/AuthContext";
import { useAppDispatch, useAppSelector } from "reduxFolder";
import { changeName } from "reduxFolder/reducers/currentWeather";

import { Tab } from "components/shared/btns/btnTab";
import { StyledWrapper } from "components/shared/wrapper/StyledWrapper";

export const Tabs = () => {
  const dispatch = useAppDispatch();
  const dataFromRedux = useAppSelector((state) => state);

  const onClickE = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };
  const authInfo = useAuth();
  const { user } = authInfo;

  if (user) {
    return (
      <StyledWrapper
        display={"flex"}
        alignitems={"center"}
        justifycontent={"center"}
      >
        {dataFromRedux.tabsData.map((item) => {
          return <Tab onClick={onClickE} key={"1"} value={item} />;
        })}
      </StyledWrapper>
    );
  } else {
    return <></>;
  }
};
