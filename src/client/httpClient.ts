import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BE_URL
});

const getLocalToken = () => {
  return localStorage.getItem("access_token");
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
