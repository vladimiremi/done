import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-done.herokuapp.com/',
});

export default api;