import axiosInstance from './axiosInstance';

export const fetchConversations = () => axiosInstance.get('/chat/conversations');
export const fetchMessages = (conversationId) => axiosInstance.get(`/chat/conversations/${conversationId}/messages`);
export const sendMessage = (conversationId, payload) =>
  axiosInstance.post(`/chat/conversations/${conversationId}/messages`, payload);

export default {
  fetchConversations,
  fetchMessages,
  sendMessage,
};
