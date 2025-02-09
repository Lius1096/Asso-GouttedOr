// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // Si le token n'existe pas, rediriger vers la page de connexion admin
  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return children; // Si un token existe, afficher les enfants (la page protégée)
};

export default ProtectedRoute;
