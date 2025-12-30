import axios from 'axios';

const authRoute = axios.create({
    baseURL: "http://localhost:8000/api/auth/"
})

export async function checkExistingUser(email, username) {
    try{
        const response = await authRoute.post('/check-existing-user', {email: email, username: username})
        console.log(response.data)
        return response.data;
    }catch(error){
        return error.response
    }
    
}

export async function sendEmailToken(email) {
    try{
        const response = await authRoute.post('/send-email-token', {email: email})
    console.log(response.data)
    return response.data;
    }catch(error){
        return error.response;
    }
    
}

export async function verifiyEmailToken(email, token) {
    try{
        const data = {
            email: email, 
            token: token
        } 
        const response = await authRoute.post('/email-token-verify', data)
        console.log(response.data)
        return response.data;
    }catch(error){
        return error.response
    }
    
}

export async function postUserRegister(userData) {
    try {
        const response = await authRoute.post('/register', userData)
        console.log(response.data)
        return response.data;
    }catch(error){
        return error.response
    }
    
}


export async function postUserLogin(email, password) {
    try{
        let userData ={
            email: email.toLowerCase(),
            password: password
        }
        const response = await authRoute.post('/login', userData)
        console.log(response.data)
        return response.data;
    }catch(error){
        return error.response
    }
    
}