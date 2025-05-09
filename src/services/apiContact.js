import api from './api'; // ← ça doit être une instance Axios

export const sendContactMessage = async (data) => {
  try {
    const response = await api.post('/api/contact', data);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error || 'Erreur lors de l’envoi du message.';
    throw new Error(message);
  }
};
