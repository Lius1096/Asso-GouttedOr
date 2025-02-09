import api from './api';

// Récupérer tous les articles
export const fetchArticles = async () => {
  try {
    const response = await api.get('/api/articles'); // Assurez-vous que '/api/articles' est correct
    return response.data; // Renvoie les articles
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    throw error;
  }
};
