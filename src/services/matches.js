
import axios from 'axios';
import { li } from 'framer-motion/client';

const matchesRoute = axios.create({
    baseURL: "http://localhost:8000/api/matches/"
})

matchesRoute.interceptors.request.use((config) => { //token JWT autenticando o usuário
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export async function getMatchesList(offset, limit, filters) {

    const searchData = {offset: offset, limit: limit, filters: filters}
    try{
        const response = await matchesRoute.post('/get-list', searchData)
        console.log(response.data)
        return response.data;
    }catch(error){
        return error.response
    }
    
}

export async function getPlayersFromMatch (matchId){

    try{
        const response = await matchesRoute.post('/get-match-players', {matchId: matchId})
        console.log(response.data)
        return response.data;
    }catch(error){
        return error.response
    }

}