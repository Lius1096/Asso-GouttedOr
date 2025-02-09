import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
};

export const createUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
};
