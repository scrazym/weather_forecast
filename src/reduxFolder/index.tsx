import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { stringReducer } from "./reducers/currentWeather";

export const store = configureStore({
  reducer: stringReducer,
});

export type StoreStateType = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<StoreStateType> = useSelector;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
