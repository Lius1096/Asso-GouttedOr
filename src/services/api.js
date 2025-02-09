import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Créer une instance Axios avec la configuration de base
const api = axios.create({
  baseURL: API_BASE_URL, // Votre base URL est déjà définie ici
});

export default api;
