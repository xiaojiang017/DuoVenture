import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 2000,
    headers: { 'token': localStorage.token }
});

export default axiosInstance