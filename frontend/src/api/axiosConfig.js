// src/api/axiosConfig.js
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000/api/v1', // URL base da API do Rails
    headers: {
        'Content-Type': 'application/json',
    },
});
