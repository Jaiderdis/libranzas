import axios from "axios";


 const consumo = axios.create({
    baseURL: 'https://localhost:7292',
    headers: { 'Content-Type' : 'application/json'},
    // withCredentials:true
    
});

export default consumo
