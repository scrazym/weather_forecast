import { number } from "yup";

import {
  IWeatherCurrentCondition,
  IWeatherCurrentLocation,
} from "./interfaceDay";
interface IDay {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  condition: IWeatherCurrentCondition;
  uv: number;
}
interface IForecastDay {
  date: string;
  date_epoch: number;
  day: IDay;
}

interface IAstro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
}

interface IHour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: IWeatherCurrentCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
}

interface IWeatherHours {
  date: string;
  date_epoch: number;
  day: IDay;
  astro: IAstro;
  hour: Array<IHour>;
}
export interface FFF {
  forecastday: Array<IWeatherHours>;
}
export interface IWeatherHour {
  location: IWeatherCurrentLocation;
  forecast: FFF;
}
const Data: IWeatherHour = {
  location: {
    name: "London",
    region: "City of London, Greater London",
    country: "United Kingdom",
    lat: 51.52,
    lon: -0.11,
    tz_id: "Europe/London",
    localtime_epoch: 1691431935,
    localtime: "2023-08-07 19:12",
  },
  forecast: {
    forecastday: [
      {
        date: "2023-09-02",
        date_epoch: 1693612800,
        day: {
          maxtemp_c: 21.2,
          maxtemp_f: 70.1,
          mintemp_c: 12.1,
          mintemp_f: 53.7,
          avgtemp_c: 16.6,
          avgtemp_f: 61.8,
          maxwind_mph: 9.4,
          maxwind_kph: 15.1,
          totalprecip_mm: 1.3,
          totalprecip_in: 0.05,
          avgvis_km: 8.4,
          avgvis_miles: 5.0,
          avghumidity: 72.0,
          condition: {
            text: "",
            icon: "//cdn.weatherapi.com/weather/64x64/day/305.png",
            code: 1192,
          },
          uv: 0.0,
        },
        astro: {
          sunrise: "06:14 AM",
          sunset: "07:46 PM",
          moonrise: "08:50 PM",
          moonset: "09:16 AM",
          moon_phase: "Waning Gibbous",
          moon_illumination: "94",
        },
        hour: [
          {
            time_epoch: 1693609200,
            time: "2023-09-02 00:00",
            temp_c: 13.8,
            temp_f: 56.9,
            is_day: 0,
            condition: {
              text: "",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 6.1,
            wind_kph: 9.8,
            wind_degree: 162,
            wind_dir: "SSE",
            pressure_mb: 1021.0,
            pressure_in: 30.15,
            precip_mm: 0.0,
            precip_in: 0.0,
            humidity: 79,
            cloud: 30,
            feelslike_c: 13.2,
            feelslike_f: 55.8,
            windchill_c: 13.2,
            windchill_f: 55.8,
            heatindex_c: 13.8,
            heatindex_f: 56.9,
            dewpoint_c: 10.7,
            dewpoint_f: 51.2,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.9,
            vis_miles: 4.0,
            gust_mph: 10.6,
            gust_kph: 17.0,
          },
          {
            time_epoch: 1693620000,
            time: "2023-09-02 03:00",
            temp_c: 12.5,
            temp_f: 54.5,
            is_day: 0,
            condition: {
              text: "",
              icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
              code: 1003,
            },
            wind_mph: 5.5,
            wind_kph: 8.9,
            wind_degree: 179,
            wind_dir: "S",
            pressure_mb: 1020.0,
            pressure_in: 30.13,
            precip_mm: 0.0,
            precip_in: 0.0,
            humidity: 83,
            cloud: 43,
            feelslike_c: 11.8,
            feelslike_f: 53.2,
            windchill_c: 11.8,
            windchill_f: 53.2,
            heatindex_c: 12.5,
            heatindex_f: 54.5,
            dewpoint_c: 10.2,
            dewpoint_f: 50.4,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 6.1,
            vis_miles: 3.0,
            gust_mph: 9.2,
            gust_kph: 14.8,
          },
          {
            time_epoch: 1693630800,
            time: "2023-09-02 06:00",
            temp_c: 12.4,
            temp_f: 54.2,
            is_day: 0,
            condition: {
              text: "",
              icon: "//cdn.weatherapi.com/weather/64x64/night/176.png",
              code: 1063,
            },
            wind_mph: 5.0,
            wind_kph: 8.1,
            wind_degree: 186,
            wind_dir: "S",
            pressure_mb: 1020.0,
            pressure_in: 30.13,
            precip_mm: 0.06,
            precip_in: 0.0,
            humidity: 84,
            cloud: 50,
            feelslike_c: 11.8,
            feelslike_f: 53.2,
            windchill_c: 11.8,
            windchill_f: 53.2,
            heatindex_c: 12.4,
            heatindex_f: 54.2,
            dewpoint_c: 10.4,
            dewpoint_f: 50.8,
            will_it_rain: 1,
            chance_of_rain: 76,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 6.7,
            vis_miles: 4.0,
            gust_mph: 7.9,
            gust_kph: 12.7,
          },
          {
            time_epoch: 1693641600,
            time: "2023-09-02 09:00",
            temp_c: 17.1,
            temp_f: 62.7,
            is_day: 1,
            condition: {
              text: "",
              icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
              code: 1063,
            },
            wind_mph: 6.5,
            wind_kph: 10.4,
            wind_degree: 176,
            wind_dir: "S",
            pressure_mb: 1020.0,
            pressure_in: 30.13,
            precip_mm: 0.01,
            precip_in: 0.0,
            humidity: 69,
            cloud: 38,
            feelslike_c: 17.0,
            feelslike_f: 62.5,
            windchill_c: 17.0,
            windchill_f: 62.5,
            heatindex_c: 17.1,
            heatindex_f: 62.7,
            dewpoint_c: 11.5,
            dewpoint_f: 52.6,
            will_it_rain: 1,
            chance_of_rain: 81,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 9.9,
            vis_miles: 6.0,
            gust_mph: 12.1,
            gust_kph: 19.5,
          },
          {
            time_epoch: 1693652400,
            time: "2023-09-02 12:00",
            temp_c: 20.3,
            temp_f: 68.5,
            is_day: 1,
            condition: {
              text: "",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 6.5,
            wind_kph: 10.4,
            wind_degree: 196,
            wind_dir: "SSW",
            pressure_mb: 1020.0,
            pressure_in: 30.12,
            precip_mm: 0.0,
            precip_in: 0.0,
            humidity: 56,
            cloud: 37,
            feelslike_c: 20.3,
            feelslike_f: 68.5,
            windchill_c: 20.3,
            windchill_f: 68.5,
            heatindex_c: 20.8,
            heatindex_f: 69.4,
            dewpoint_c: 11.3,
            dewpoint_f: 52.4,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 9.9,
            vis_miles: 6.0,
            gust_mph: 13.4,
            gust_kph: 21.6,
          },
          {
            time_epoch: 1693663200,
            time: "2023-09-02 15:00",
            temp_c: 21.1,
            temp_f: 70.0,
            is_day: 1,
            condition: {
              text: "",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003,
            },
            wind_mph: 8.0,
            wind_kph: 12.9,
            wind_degree: 185,
            wind_dir: "S",
            pressure_mb: 1019.0,
            pressure_in: 30.09,
            precip_mm: 0.0,
            precip_in: 0.0,
            humidity: 53,
            cloud: 46,
            feelslike_c: 21.1,
            feelslike_f: 70.0,
            windchill_c: 21.1,
            windchill_f: 70.0,
            heatindex_c: 22.3,
            heatindex_f: 72.2,
            dewpoint_c: 11.4,
            dewpoint_f: 52.4,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 9.9,
            vis_miles: 6.0,
            gust_mph: 14.1,
            gust_kph: 22.7,
          },
        ],
      },
    ],
  },
};
