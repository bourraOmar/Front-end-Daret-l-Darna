import axiosInstance from './axiosInstance';

export const fetchAnnonces = (params) => axiosInstance.get('/annonces', { params });
export const fetchAnnonceById = (id) => axiosInstance.get(`/annonces/${id}`);
export const createAnnonce = (payload) => axiosInstance.post('/annonces', payload);
export const updateAnnonce = (id, payload) => axiosInstance.put(`/annonces/${id}`, payload);
export const deleteAnnonce = (id) => axiosInstance.delete(`/annonces/${id}`);

export default {
  fetchAnnonces,
  fetchAnnonceById,
  createAnnonce,
  updateAnnonce,
  deleteAnnonce,
};
