import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

declare module "axios" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export interface AxiosResponse<T = any> extends Promise<T> {
    baseUrl: Promise<string>;
  }
}

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

export default axiosInstance;
