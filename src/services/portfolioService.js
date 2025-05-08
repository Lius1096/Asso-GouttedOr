// services/portfolioService.js

import api from './api'; // assure-toi que le chemin est correct

// Récupérer tous les projets
export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    throw error;
  }
};

// Ajouter un projet (si tu veux faire un CRUD complet)
export const createProject = async (projectData) => {
  try {
    const response = await api.post('/api/projects', projectData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du projet :", error);
    throw error;
  }
};

// Mettre à jour un projet
export const updateProject = async (projectId, updatedData) => {
  try {
    const response = await api.put(`/api/projects/${projectId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du projet :", error);
    throw error;
  }
};

// Supprimer un projet
export const deleteProject = async (projectId) => {
  try {
    const response = await api.delete(`/api/projects/${projectId}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression du projet :", error);
    throw error;
  }
};
