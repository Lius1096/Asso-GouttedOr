import React, { useState } from 'react';
import AdminProfileInfo from './AdminProfileInfo';
import AdminProfileEdit from './AdminProfileEdit';
import useAdminProfile from '../hooks/useAdminProfile';

const AdminHeader = () => {
  const { admin, loading, error } = useAdminProfile();
  const [openDialog, setOpenDialog] = useState(false);
  const [username, setUsername] = useState(admin?.username || '');
  const [email, setEmail] = useState(admin?.email || '');
  const [profilePicture, setProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleEditProfile = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSaveProfile = () => {
    if (newPassword && newPassword !== confirmNewPassword) {
      alert('Les nouveaux mots de passe ne correspondent pas.');
      return;
    }
    // Add save logic here
    console.log('Saving profile...', { username, email, profilePicture, newPassword });
    setOpenDialog(false);
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <header className="bg-white shadow-lg p-6 rounded-lg mb-6 max-w-4xl mx-auto">
      {/* Profile Information */}
      <AdminProfileInfo admin={admin} imagePreview={imagePreview} handleEditProfile={handleEditProfile} />
      
      {/* Profile Edit Dialog */}
      <AdminProfileEdit
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        profilePicture={profilePicture}
        setProfilePicture={setProfilePicture}
        currentPassword={currentPassword}
        setCurrentPassword={setCurrentPassword}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        confirmNewPassword={confirmNewPassword}
        setConfirmNewPassword={setConfirmNewPassword}
        handleProfilePictureChange={handleProfilePictureChange}
        handleSaveProfile={handleSaveProfile}
      />
    </header>
  );
};

export default AdminHeader;
