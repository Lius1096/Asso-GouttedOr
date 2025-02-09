import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const AdminLogin = () => {
  const [identifier, setIdentifier] = useState(''); // Email ou username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.login({ identifier, password });
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Admin Connexion
        </h2>
        {error && (
          <div className="bg-red-500 text-white text-sm p-2 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-600">
              Email ou Nom d'utilisateur
            </label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="w-full p-3 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-300"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Vous n'avez pas de compte ? <a href="/admin/register" className="text-blue-500 hover:underline">Inscrivez-vous ici</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
