import axiosInstance from './axiosInstance';

export const login = (credentials) => axiosInstance.post('/auth/login', credentials);
export const register = (payload) => axiosInstance.post('/auth/register', payload);
export const fetchCurrentUser = () => axiosInstance.get('/auth/me');
export const updateProfile = (payload) => axiosInstance.put('/auth/profile', payload);

export default {
  login,
  register,
  fetchCurrentUser,
  updateProfile,
};
