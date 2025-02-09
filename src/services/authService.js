import api from './api';

const authService = {
  login: async (credentials) => {
    try {
      const response = await api.post('/api/auth/admin/login', credentials);
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
      }
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Échec de la connexion. Vérifiez votre email et mot de passe.';
      throw new Error(message);
    }
  },

  register: async (credentials) => {
    try {
      const response = await api.post('/api/auth/admin/register', credentials);
      const token = response.data.token;
      if (token) {
        localStorage.setItem('token', token);
      }
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Erreur lors de l\'inscription. Veuillez réessayer.';
      throw new Error(message);
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },
};

export default authService;
