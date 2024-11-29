import axios from 'axios';

const authRoute = axios.create({
    baseURL: "http://localhost:8000/api/auth/"
})

async function postLogin({}) {
    const response = await authRoute.post('/login')
    return response.data;
}

async function postRegister({}) {
    const response = await authRoute.post('/login')
    return response.data;
}