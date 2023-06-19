import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 2000,
    headers: { 'token': localStorage.dvtoken }
});

export default axiosInstance