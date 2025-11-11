import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api',
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Bubble up unauthorized responses so consumers can trigger re-auth flows.
      console.warn('Unauthorized request intercepted');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
