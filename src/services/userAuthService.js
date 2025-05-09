import api from './api';

// 🔐 Inscription d’un utilisateur
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/api/auth/register', userData);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: 'Erreur lors de l’inscription' };
  }
};

// 🔐 Connexion d’un utilisateur (avec email ou username)
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/api/auth/login', credentials);
    return response.data;
  } catch (error) {
    return error.response?.data || { message: 'Erreur lors de la connexion' };
  }
};

// 🔓 Déconnexion locale (supprimer le token du stockage local)
export const logoutUser = () => {
  localStorage.removeItem('token');
};

// 🔍 Récupérer le token du stockage local
export const getToken = () => {
  return localStorage.getItem('token');
};

// 📦 Header d’autorisation pour les requêtes protégées
export const authHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
