import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CheckAuth } from "Context/AuthContext/checkAuth";
import {
  fetchWeatherCurrent,
  fetchWeatherHour,
  fetchWeatherWeek,
} from "reduxFolder/reducers/currentWeather";

import { Footer } from "components/ui/footer/footer";
import Basic from "components/ui/FormikSignUp/SignUp";
import { CreateLoginPage } from "components/ui/loginForm/LoginPage";
import { MainContentWraper } from "components/ui/main/weatheNotLogin/mainContentWrapper";
import { ContainerBgWrapper } from "components/ui/main/weatherBg";
import { WeatherDay } from "components/ui/main/weatherday/weatherDay";
import { PageNotFound } from "components/ui/notFound/pageNotFound";

import { ThemeContext } from "./Context/themeContext/index";
import { useAppDispatch, useAppSelector } from "./reduxFolder";

import "./App.css";

function App() {
  const { styles } = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const dataFromRedux = useAppSelector((state) => state);
  const { currentWeather } = dataFromRedux;
  const { location } = currentWeather;
  const { name } = location;

  useEffect(() => {
    dispatch(fetchWeatherCurrent(name));
    dispatch(fetchWeatherWeek(name));
    dispatch(fetchWeatherHour(name));
  }, [name]);

  return (
    <div className="App">
      <ContainerBgWrapper themeStyle={styles}>
        <Router>
          <Routes>
            <Route path="/" element={<MainContentWraper />} />
            <Route path="/login" element={<CreateLoginPage />} />
            <Route path="/signup" element={<Basic />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/more"
              element={
                <CheckAuth>
                  <WeatherDay />
                </CheckAuth>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </ContainerBgWrapper>
    </div>
  );
}

export default App;
