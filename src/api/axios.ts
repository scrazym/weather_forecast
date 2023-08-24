import axios, { AxiosError, AxiosResponse } from "axios";

import { BASE_URL, WEATHERAPI_KEY } from "./consts/const";
export const axiosApiInstance: any = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: WEATHERAPI_KEY,
  },
});

class Api {
  async getData(url: string, params?: any) {
    return await axiosApiInstance
      .get(url, params)
      .then(this.handleResponse)
      .catch(this.handleError);
  }
  async post(url: string, params?: any) {
    return await axiosApiInstance.post(url, params);
  }
  async patch(url: string, params?: any) {
    return await axiosApiInstance.patch(url, params);
  }
  async put(url: string, params?: any) {
    return await axiosApiInstance.put(url, params);
  }
  private handleResponse(response: AxiosResponse) {
    return {
      status: response.status,
      info: response.data,
      headers: response.headers,
    };
  }
  private handleError(err: AxiosError) {
    return {
      status: err.response?.status,
      data: err.message,
    };
  }
}
export default new Api();
