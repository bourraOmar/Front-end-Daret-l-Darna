import axiosInstance from './axiosInstance';

export const fetchAdminStats = () => axiosInstance.get('/admin/stats');
export const fetchPendingKyc = () => axiosInstance.get('/admin/kyc');
export const approveAnnonce = (id) => axiosInstance.post(`/admin/annonces/${id}/approve`);
export const rejectAnnonce = (id, payload) => axiosInstance.post(`/admin/annonces/${id}/reject`, payload);

export default {
  fetchAdminStats,
  fetchPendingKyc,
  approveAnnonce,
  rejectAnnonce,
};
