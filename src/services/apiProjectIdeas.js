import api from './api';

export const submitProjectIdea = async (formData) => {
  try {
    const response = await api.post('/api/project-ideas/submit', formData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    throw new Error("Erreur lors de l'envoi du projet");
  }
};
