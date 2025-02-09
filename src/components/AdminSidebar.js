// src/components/AdminSidebar.jsx
import React from 'react';
import { FaUsers, FaFileAlt, FaCog, FaUserCircle } from 'react-icons/fa';

const AdminSidebar = ({ onPageChange }) => {
  return (
    <aside className="bg-indigo-800 text-white w-64 min-h-screen p-5 rounded-r-xl shadow-lg">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <button 
              onClick={() => onPageChange('overview')}
              className="flex w-full items-center text-left hover:bg-indigo-700 p-3 rounded-lg transition"
            >
              <FaUserCircle className="mr-3" /> Aperçu
            </button>
          </li>
          <li>
            <button 
              onClick={() => onPageChange('profile')}
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
              <FaFileAlt className="mr-3" /> Articles
            </button>
          </li>
          <li>
            <button 
              onClick={() => onPageChange('settings')}
              className="flex w-full items-center text-left hover:bg-indigo-700 p-3 rounded-lg transition"
            >
              <FaCog className="mr-3" /> Paramètres
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
