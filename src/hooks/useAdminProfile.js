// src/hooks/useAdminProfile.js
import { useEffect, useState } from 'react';
import adminService from '../services/adminService';

const useAdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
        try {
          const adminData = await adminService.getProfile();
          console.log("Admin Data:", adminData);  // 🔍 Debug
          setAdmin(adminData);
        } catch (err) {
          console.error("Erreur lors du chargement du profil admin:", err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
    fetchAdminData();
  }, []);

  return { admin, loading, error };
};

export default useAdminProfile;
