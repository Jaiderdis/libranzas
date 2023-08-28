import axios from 'axios';
const BASE_URL = 'https://localhost:7292';
// const BASE_URL = 'http://192.168.20.199:35956/apiLIbranzas/';



export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});