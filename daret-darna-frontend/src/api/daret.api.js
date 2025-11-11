import axiosInstance from './axiosInstance';

export const fetchDarets = (params) => axiosInstance.get('/darets', { params });
export const fetchDaretById = (id) => axiosInstance.get(`/darets/${id}`);
export const createDaret = (payload) => axiosInstance.post('/darets', payload);
export const updateDaret = (id, payload) => axiosInstance.put(`/darets/${id}`, payload);

export default {
  fetchDarets,
  fetchDaretById,
  createDaret,
  updateDaret,
};
