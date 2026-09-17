import api from '../api/api.js'

export async function loginRequest(email, senha){
    const response = await api.post(`/auth/login`, {email, senha})

    return response.data
}

export async function createCompanyRequest(nome_empresa, cnpj){
    const response = await api.post(`/empresa`, {nome_empresa, cnpj})

    return response.data
}