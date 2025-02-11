import React from 'react';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { Avatar } from '@mui/material';  // Ajoutez cette ligne pour l'importation de Avatar
import AccountCircleIcon from '@mui/icons-material/AccountCircle';  // Ajoutez cette ligne pour l'importation de AccountCircleIcon

const AdminProfileEdit = ({
  openDialog,
  handleCloseDialog,
  username,
  setUsername,
  email,
  setEmail,
  profilePicture,
  setProfilePicture,
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  confirmNewPassword,
  setConfirmNewPassword,
  handleProfilePictureChange,
  handleSaveProfile
}) => {
  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <DialogTitle>Modifier le profil</DialogTitle>
      <DialogContent className="space-y-4">
        {/* File Input for Profile Picture */}
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32 border-dashed border-4 border-gray-300 rounded-full flex items-center justify-center cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="file-input"
              onChange={handleProfilePictureChange}
            />
            <label htmlFor="file-input">
              {profilePicture ? (
                <Avatar src={profilePicture} sx={{ width: '100%', height: '100%' }} />
              ) : (
                <AccountCircleIcon style={{ fontSize: 40, color: '#4B4B4B' }} />
              )}
            </label>
          </div>
        </div>

        {/* Editable Fields */}
        <TextField
          label="Nom d'utilisateur"
          fullWidth
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4"
        />
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />

        {/* Password Change Fields */}
        <TextField
          label="Mot de passe actuel"
          type="password"
          fullWidth
          variant="outlined"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="mb-4"
        />
        <TextField
          label="Nouveau mot de passe"
          type="password"
          fullWidth
          variant="outlined"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="mb-4"
        />
        <TextField
          label="Confirmer le mot de passe"
          type="password"
          fullWidth
          variant="outlined"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="mb-4"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="secondary">Annuler</Button>
        <Button onClick={handleSaveProfile} color="primary">Enregistrer</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdminProfileEdit;
