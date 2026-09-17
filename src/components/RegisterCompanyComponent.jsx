import { useState } from 'react'
import { createCompanyRequest } from '../services/authService.js'
import { toast } from 'react-hot-toast'
import SideBar from '../components/SideBarLogin.jsx'

function RegisterCompanyComponent(){
    const [nomeEmpresa, setNomeEmpresa] = useState('')
    const [cnpj, setCnpj] = useState('')
    
    const handleCreateCompany = async (e) => {
        e.preventDefault()


        const cnpjValidado = /^[A-Za-z0-9]{12}\d{2}$/

        if (cnpj != cnpjValidado){
            toast.error('CNPJ deve conter 14 caracteres alfanuméricos e os dois últimos digitos devem ser números.')    
        } else {
            const response = createCompanyRequest(nomeEmpresa, cnpj)
            console.log(response)
        }

    }

    return (
        <main className="flex flex-col bg-[#F5F5F3] h-screen w-screen justify-center items-center p-[32px]">
            <div className="w-[383px]"> 
                <div className="w-full mb-16">
                    <h1 className="text-[24px] font-[#1A1A1A] font-sans"><b>Cadastre sua empresa</b></h1>
                    <p className="font-sans text-[14px] text-[#5A738E]">Já tem conta? <a className="text-blue-500 hover:underline" href="/">Faça login</a></p>
                </div>

                <form onSubmit={handleCreateCompany}>
                    <div>
                        <div className="mb-[16px]">
                            <p className="text-[12px] font-mono text-[#6B6B6B] mb-[5px]">NOME DA EMPRESA <span className="text-red-500">*</span></p>
                            <input placeholder="Ex: Contábil Nogueira & Filhos" className="w-full h-[42px] border-1 border-gray-400 bg-white px-[12px]"
                            id="input-nome"
                            type="text"
                            value={nomeEmpresa}
                            onChange={(e) => setNomeEmpresa(e.target.value)}
                            ></input>
                        </div>

                        <div className="mb-3.5">
                            <p className="font-mono text-[#6B6B6B] text-[12px] mb-[5px]">CNPJ <span className="text-red-500">*</span></p>
                            <input placeholder="Ex: AAAAAAAAAAAA12" className="w-full h-[42px] border-1 border-gray-400 bg-white px-[12px]"
                            id="input-cnpj"
                            type="text"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                            ></input>
                        </div>
                    
                        <button className="bg-[#8997A9] text-white w-full h-[40px]" type="submit">Continuar →</button>
                    </div>
                </form>
            </div>
            
        </main>
    )
}

export default RegisterCompanyComponent