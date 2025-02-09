// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import ProfileManager from '../components/ProfileManager';
import axios from 'axios';

const AdminDashboard = () => {
  // On simule ici l'utilisateur connecté
  const [user, setUser] = useState({
    username: 'AdminUser',
    email: 'admin@example.com',
    profilePicture: '/default-avatar.png'
  });

  // Exemple de récupération dynamique de statistiques
  const [stats, setStats] = useState({ totalArticles: 0, totalUsers: 0 });
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userRes = await axios.get('/api/users'); // Hypothétique endpoint
        const articleRes = await axios.get('/api/articles'); // Hypothétique endpoint
        setStats({
          totalUsers: userRes.data.length,
          totalArticles: articleRes.data.length,
        });
      } catch (err) {
        console.error('Erreur lors de la récupération des statistiques', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col p-6">
        <AdminHeader user={user} />

        <main className="flex-1">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tableau de Bord</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-700">Articles Publiés</h3>
                <p className="text-3xl font-bold text-gray-900">{stats.totalArticles}</p>
                <p className="text-sm text-gray-500">Total d'articles</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-700">Utilisateurs</h3>
                <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
                <p className="text-sm text-gray-500">Utilisateurs inscrits</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-700">Autres Statistiques</h3>
                <p className="text-3xl font-bold text-gray-900">—</p>
                <p className="text-sm text-gray-500">À définir</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mon Profil</h2>
            <ProfileManager />
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
