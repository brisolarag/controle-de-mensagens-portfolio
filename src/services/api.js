import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portfoliobackend-production-a6ac.up.railway.app'
})

export default api;