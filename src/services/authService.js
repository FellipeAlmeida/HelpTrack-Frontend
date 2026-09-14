import api from '../api/api.js'

async function loginRequest(email, senha){
    const response = await api.post(`/auth/login`, {email, senha})

    return response.data
}

export default loginRequest