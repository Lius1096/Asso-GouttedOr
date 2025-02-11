import api from './api';

const adminService = {
  getProfile: async () => {
    try {
      const token = localStorage.getItem('token');
      console.log("Token récupéré:", token);
      const response = await api.get('/api/admin/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("Données du profil admin:", response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Impossible de récupérer le profil admin.');
    }
  },

  updateProfile: async (adminData) => {
    try {
      const token = localStorage.getItem('token');
      
      const formData = new FormData();
      formData.append('username', adminData.username);
      formData.append('email', adminData.email);
      formData.append('firstName', adminData.firstName);
      formData.append('lastName', adminData.lastName);
  
      // Ajouter la photo de profil uniquement si elle est fournie
      if (adminData.profilePicture) {
        formData.append('profilePicture', adminData.profilePicture);
      }
  
      const response = await api.put('/api/admin/profile', formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data' // Nécessaire pour l'upload de fichiers
        }
      });
  
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erreur lors de la mise à jour du profil.');
    }
  }
  
};

export default adminService;
