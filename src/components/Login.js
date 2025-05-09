import { useState } from 'react';
import { loginUser } from '../services/userAuthService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(form);
    if (response.token) {
      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    } else {
      setError(response.message || 'Identifiants incorrects');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Bienvenue 👋</h2>
        <p className="text-center text-gray-500">Connecte-toi pour accéder à ton espace</p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email ou nom d'utilisateur</label>
            <input
              type="text"
              name="identifier"
              placeholder="johndoe@example.com"
              value={form.identifier}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Mot de passe</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm">
          Pas encore de compte ?{' '}
          <a href="/register" className="text-blue-600 font-medium hover:underline">
            Inscris-toi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
