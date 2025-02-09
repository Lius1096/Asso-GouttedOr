// src/components/ProfileManager.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Button, TextField, Typography, Paper, Container, CircularProgress } from '@mui/material';

const ProfileManager = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState('');

  // Récupération des données utilisateur
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/profile'); // Remplacer par ton endpoint réel
        setUser(response.data);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setPreview(response.data.profilePicture || '/default-avatar.png');
      } catch (err) {
        console.error("Erreur lors du chargement du profil", err);
        setError("Erreur lors du chargement du profil.");
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setError('');

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    try {
      const response = await axios.put('/api/user/update', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUser(response.data);
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la mise à jour du profil.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <Container className="flex justify-center items-center min-h-[200px]">
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Paper elevation={3} className="p-6 rounded-lg">
      <Typography variant="h5" align="center" gutterBottom className="font-bold mb-4">
        Mon Profil
      </Typography>
      {error && (
        <Typography variant="body2" color="error" align="center" className="mb-4">
          {error}
        </Typography>
      )}
      <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <Avatar src={preview} sx={{ width: 100, height: 100, mb: 2 }} />
          <Button variant="contained" component="label">
            Changer de photo
            <input type="file" hidden accept="image/*" onChange={handleFileChange} />
          </Button>
        </div>
        <TextField
          label="Nom d'utilisateur"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
          required
        />
        <Button variant="contained" color="primary" type="submit" fullWidth disabled={updating}>
          {updating ? 'Mise à jour...' : 'Mettre à jour'}
        </Button>
      </form>
    </Paper>
  );
};

export default ProfileManager;
