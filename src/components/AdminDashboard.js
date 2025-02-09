// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import ProfileManager from './ProfileManager';
import axios from 'axios';
import ManageArticle from './ManageArticles';

// Composants d'exemple pour d'autres sections
const Overview = () => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Aperçu</h2>
    <p>Statistiques et informations globales.</p>
  </div>
);

const UserManagement = () => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Gestion des Utilisateurs</h2>
    <p>Liste et gestion des utilisateurs.</p>
  </div>
);

const ArticleManagement = () => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Gestion des Articles</h2>
    <p>Liste et gestion des articles.</p>
  </div>
);

const AdminDashboard = () => {
  const [selectedPage, setSelectedPage] = useState('overview');
  const [user, setUser] = useState({
    username: 'AdminUser',
    email: 'admin@example.com',
    profilePicture: '/default-avatar.png'
  });
  const [stats, setStats] = useState({ totalUsers: 0, totalArticles: 0 });

  // Exemple de récupération des statistiques dynamiques
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, articleRes] = await Promise.all([
          axios.get('/api/users'),     // Endpoint pour récupérer la liste des utilisateurs
          axios.get('/api/articles')   // Endpoint pour récupérer la liste des articles
        ]);
        setStats({
          totalUsers: userRes.data.length,
          totalArticles: articleRes.data.length,
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques", error);
      }
    };
    fetchStats();
  }, []);

  // Fonction pour changer de page dans le tableau de bord
  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  // Rendu du contenu principal en fonction de la sélection
  const renderContent = () => {
    switch (selectedPage) {
      case 'overview':
        return <Overview />;
      case 'profile':
        return <ProfileManager />;
      case 'users':
        return <UserManagement />;
      case 'articles':
        return <ManageArticle />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar onPageChange={handlePageChange} />
      
      {/* Contenu principal */}
      <div className="flex-1 flex flex-col p-6">
        <AdminHeader user={user} />
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Tableau de bord</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Articles Publiés</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.totalArticles}</p>
              <p className="text-sm text-gray-500">Total d'articles</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Utilisateurs</h3>
              <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
              <p className="text-sm text-gray-500">Utilisateurs inscrits</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Autres Statistiques</h3>
              <p className="text-3xl font-bold text-gray-900">—</p>
              <p className="text-sm text-gray-500">À définir</p>
            </div>
          </div>
        </div>
        <main className="flex-1">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
