import React from 'react';
import { Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AdminProfileInfo = ({ admin, imagePreview, handleEditProfile }) => {
  const photoToShow =
    imagePreview instanceof File
      ? URL.createObjectURL(imagePreview)
      : imagePreview || admin?.profilePicture;

  return (
    <div className="flex flex-col items-center mb-6">
      <div
        className="w-32 h-32 border-4 border-gray-300 rounded-full flex items-center justify-center mb-4 cursor-pointer"
        onClick={handleEditProfile}
        title="Modifier la photo de profil"
      >
        {photoToShow ? (
          <Avatar src={photoToShow} alt="Photo de profil" sx={{ width: 128, height: 128 }} />
        ) : (
          <AccountCircleIcon style={{ fontSize: 128, color: '#4B4B4B' }} />
        )}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {admin?.username || "Nom d'utilisateur"}
      </h2>
      <p className="text-lg text-gray-600">{admin?.email || "Email non disponible"}</p>
    </div>
  );
};

export default AdminProfileInfo;
