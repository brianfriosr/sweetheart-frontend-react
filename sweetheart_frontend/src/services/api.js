import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/', // URL del backend
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json', // Asegúrate de enviar datos JSON
    },
});

export default api;

// export const getAllProducts = () => {
//     return axios.get('http://127.0.0.1:8000/api/v1/products/')
// }
