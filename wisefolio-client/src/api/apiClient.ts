import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/users', // Adjust base URL as needed
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
