import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WEATHERAPI_KEY } from "api/consts/const";

import Api from "../../api/axios";

import { IWeatherHour } from "./IHours";
import { IWeatherCurrent } from "./interfaceDay";

export type InitialStateType = {
  currentWeather: IWeatherCurrent;
  loading: boolean;
  error: string | null;
  weatherWeek: Array<IWeatherHour>;
  tabsData: Array<string>;
  weatherHour: IWeatherHour | [];
};

const initialState: InitialStateType = {
  currentWeather: {
    location: {
      name: "Minsk",
      region: "Minsk",
      country: "Belarus",
      lat: 53.9,
      lon: 27.57,
      tz_id: "Europe/Minsk",
      localtime_epoch: 1691054058,
      localtime: "2023-08-03 12:14",
    },
    current: {
      last_updated_epoch: 1691053200,
      last_updated: "2023-08-03 12:00",
      temp_c: 22.0,
      temp_f: 71.6,
      is_day: 1,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003,
      },
      wind_mph: 11.9,
      wind_kph: 19.1,
      wind_degree: 190,
      wind_dir: "S",
      pressure_mb: 1006.0,
      pressure_in: 29.71,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 73,
      cloud: 75,
      feelslike_c: 24.5,
      feelslike_f: 76.2,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 6.0,
      gust_mph: 15.4,
      gust_kph: 24.8,
    },
  },
  weatherWeek: [],
  loading: false,
  error: null,
  tabsData: [],
  weatherHour: [],
};

export const fetchWeatherCurrent: any = createAsyncThunk<void, void>(
  "weather/fetchWeatherCurrent",
  async (location, { rejectWithValue, dispatch }) => {
    try {
      const result = await Api.getData(
        `/current.json?key=${WEATHERAPI_KEY}&q=${location}`
      );
      dispatch(addCurrentWeather(result.info));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchWeatherWeek: any = createAsyncThunk<void, void>(
  "weather/fetchWeatherWeek",
  async (location, { rejectWithValue, dispatch }) => {
    try {
      const result = await Api.getData(
        `/forecast.json?key=${WEATHERAPI_KEY}&q=${location}&days=7`
      );
      dispatch(addOneDayWeather(result.info));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchWeatherHour: any = createAsyncThunk<void, any>(
  "weather/fetchWeatherHour",
  async (location, { rejectWithValue, dispatch }) => {
    try {
      const result = await Api.getData(
        `/future.json?key=${WEATHERAPI_KEY}&q=${location}&dt=2023-09-23`
      );
      dispatch(addHourWeather(result.info));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const stringSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    addCurrentWeather: (state, action: PayloadAction<IWeatherCurrent>) => {
      state.currentWeather = action.payload;
    },
    addOneDayWeather: (state, action: PayloadAction<any>) => {
      state.weatherWeek = action.payload.forecast.forecastday;
    },
    addHourWeather: (state, action: PayloadAction<IWeatherHour>) => {
      state.weatherHour = action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.currentWeather.location.name = action.payload;
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.tabsData.length < 3 ? state.tabsData.push(action.payload) : null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherCurrent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherCurrent.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchWeatherCurrent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addCurrentWeather,
  changeName,
  addOneDayWeather,
  addToFavorites,
  addHourWeather,
} = stringSlice.actions;
export const stringReducer = stringSlice.reducer;
