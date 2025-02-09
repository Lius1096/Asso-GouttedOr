import React, { useState } from 'react';
import authService from '../services/authService';

const AdminRegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const data = await authService.register({ username, email, password });
      if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = '/admin/login';
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Inscription de l'Administrateur</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Nom d'utilisateur</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Mot de passe</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirmer le mot de passe</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            S'inscrire
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">Vous avez déjà un compte ? 
          <a href="/admin/login" className="text-blue-600 hover:underline"> Connectez-vous ici</a>
        </p>
      </div>
    </div>
  );
};

export default AdminRegisterForm;
