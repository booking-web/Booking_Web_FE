import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.BE,
});

const getLocalToken = () => {
  return localStorage.getItem("accessToken");
};

httpClient.interceptors.request.use(
  (config) => {
    const token = getLocalToken();
    if (token && !config.headers?.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
