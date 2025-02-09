import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/admin/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = async (id) => {
    await fetch(`/api/admin/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Utilisateurs</h2>
      <ul className="space-y-3">
        {users.map((user) => (
          <li key={user._id} className="flex justify-between p-3 bg-white rounded-lg shadow">
            <span>{user.username} ({user.role})</span>
            <button onClick={() => deleteUser(user._id)} className="text-red-500 hover:text-red-700">Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
