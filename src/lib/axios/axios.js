import axios from "axios";

const apiAxios = axios.create({
    baseURL:'http://localhost:3002',
    timeout: 10000,
    headers:{'Content-Type':'application/json'}
});


export default apiAxios;