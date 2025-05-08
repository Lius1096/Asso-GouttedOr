import React, { useState, useEffect } from 'react';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Avatar
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AdminProfileEdit = ({
  openDialog,
  handleCloseDialog,
  initialUsername,
  setUsername,
  initialEmail,
  setEmail,
  profilePicture,
  setProfilePicture
}) => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    profilePicture: ''
  });

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    setUser({
      username: initialUsername || '',
      email: initialEmail || '',
      profilePicture: profilePicture instanceof File ? URL.createObjectURL(profilePicture) : profilePicture || ''
    });
  }, [initialUsername, initialEmail, profilePicture]);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setUser((prev) => ({ ...prev, profilePicture: previewUrl }));
    setProfilePicture(file); // Important : stocker le fichier, pas juste l'URL
  };

  const handleSaveProfile = async () => {
    const formData = new FormData();
  
    // Ajouter les données qui ont été modifiées
    if (user.username.trim()) formData.append('username', user.username.trim());
    if (user.email.trim()) formData.append('email', user.email.trim());
  
    if (currentPassword) formData.append('currentPassword', currentPassword);
    if (newPassword) formData.append('newPassword', newPassword);
  
    // Ajouter la photo de profil si elle a été modifiée
    if (profilePicture instanceof File) {
      formData.append('profilePicture', profilePicture);
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/admin/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: formData
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Profil mis à jour avec succès.');
        setUsername(user.username);
        setEmail(user.email);
        handleCloseDialog();
      } else {
        alert(data.message || 'Erreur lors de la mise à jour');
      }
    } catch (error) {
      console.error('Erreur de mise à jour du profil :', error);
      alert('Erreur serveur.');
    }
  };
  
  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>Modifier le profil</DialogTitle>
      <DialogContent className="space-y-4">
        {/* Sélecteur de photo */}
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 border-dashed border-4 border-gray-300 rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="file-input"
              onChange={handleProfilePictureChange}
            />
            <label htmlFor="file-input" className="w-full h-full flex justify-center items-center">
              {user.profilePicture ? (
                <Avatar
                  src={user.profilePicture}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <AccountCircleIcon style={{ fontSize: 40, color: '#4B4B4B' }} />
              )}
            </label>
          </div>
        </div>
  
        {/* Champs texte pour nom d'utilisateur et email */}
        <TextField
          label="Nom d'utilisateur"
          fullWidth
          variant="outlined"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
  
        {/* Champs pour mot de passe */}
        <TextField
          label="Mot de passe actuel"
          type="password"
          fullWidth
          variant="outlined"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <TextField
          label="Nouveau mot de passe"
          type="password"
          fullWidth
          variant="outlined"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          label="Confirmer le mot de passe"
          type="password"
          fullWidth
          variant="outlined"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          error={newPassword !== confirmNewPassword}
          helperText={newPassword !== confirmNewPassword ? 'Les mots de passe ne correspondent pas.' : ''}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="secondary">
          Annuler
        </Button>
        <Button
          onClick={handleSaveProfile}
          color="primary"
          disabled={
            // Désactive le bouton uniquement si les mots de passe sont différents
            (newPassword !== confirmNewPassword && (newPassword || confirmNewPassword)) ||
            (!user.username.trim() && !user.email.trim() && !profilePicture instanceof File)
          }
        >
          Enregistrer
        </Button>
      </DialogActions>
    </Dialog>
  );
  

  
};

export default AdminProfileEdit;
