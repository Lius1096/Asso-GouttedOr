import React from 'react';
import { FaUsers, FaFileAlt, FaCog, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService'; // Importation du service
import AdminHeader from './AdminHeader'; // Importation du composant AdminHeader

const AdminSidebar = ({ onPageChange }) => {
  const navigate = useNavigate();

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    // Appel à la fonction de déconnexion du service
    authService.logout();

    // Redirection vers la page de connexion après déconnexion
    navigate('/admin/login');
  };

  return (
    <aside className="bg-indigo-800 text-white w-64 min-h-screen p-5 rounded-r-xl shadow-lg">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
      </div>

      {/* AdminHeader ajouté ici */}
      <AdminHeader />

      <nav>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => onPageChange('projects')}
              className="flex w-full items-center text-left hover:bg-indigo-700 p-3 rounded-lg transition"
            >
              <FaUserCircle className="mr-3" /> Projets
            </button>
          </li>
          <li>
            <button
              onClick={() => onPageChange('header')}
              className="flex w-full items-center text-left hover:bg-indigo-700 p-3 rounded-lg transition"
            >
              <FaUserCircle className="mr-3" /> Gérer le Profil
            </button>
          </li>
          <li>
            <button
              onClick={() => onPageChange('users')}
              className="flex w-full items-center text-left hover:bg-indigo-700 p-3 rounded-lg transition"
            >
              <FaUsers className="mr-3" /> Utilisateurs
            </button>
          </li>
          <li>
            <button
              onClick={() => onPageChange('articles')}
              className="flex w-full items-center text-left hover:bg-indigo-700 p-3 rounded-lg transition"
            >
              <FaFileAlt className="mr-3" /> Articles Publiés
            </button>
          </li>
          {/* Ajouter AdminProfileInfo ici */}
          <li>
            <button
              onClick={() => onPageChange('settings')}
              className="flex w-full items-center text-left hover:bg-indigo-700 p-3 rounded-lg transition"
            >
              <FaCog className="mr-3" /> Paramètres
            </button>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex w-full items-center text-left hover:bg-indigo-700 p-3 rounded-lg transition"
            >
              <FaSignOutAlt className="mr-3" /> Déconnexion
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
