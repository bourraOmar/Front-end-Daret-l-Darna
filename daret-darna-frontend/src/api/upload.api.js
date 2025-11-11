import axiosInstance from './axiosInstance';

export const uploadFile = (formData, config = {}) =>
  axiosInstance.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    ...config,
  });

export default {
  uploadFile,
};
