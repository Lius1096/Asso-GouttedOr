// src/components/AdminHeader.jsx
import React from 'react';
import { Button, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import authService from '../services/authService';

import { useNavigate } from 'react-router-dom';


const AdminHeader = ({ user }) => {
  const navigate = useNavigate();

   // Gestionnaire pour la déconnexion
   const handleLogout = () => {
    authService.logout(); // Supprime le token
    navigate('/admin/login'); // Redirige vers la page de connexion (ou une autre page)
  };

  return (
    <header className="bg-white shadow-lg p-4 flex items-center justify-between rounded-lg mb-6">
      <div className="flex items-center">
        {/* Conteneur pour la photo de profil avec dégradé */}
        <div className="mr-4">
          <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center">
            {user.profilePicture ? (
              <Avatar 
                src={user.profilePicture}
                alt="Photo de profil"
                sx={{ width: '100%', height: '100%' }}
              />
            ) : (
              <AccountCircleIcon style={{ fontSize: 60, color: 'white' }} />
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{user.username}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <Button variant="contained" color="primary" className="rounded-md hover:shadow-xl transition">
          Modifier le profil
        </Button>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handleLogout} // Ajout du gestionnaire de déconnexion
          className="rounded-md hover:shadow-xl transition"
        >
          Déconnexion
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
