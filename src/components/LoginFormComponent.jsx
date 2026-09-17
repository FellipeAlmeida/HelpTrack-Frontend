import { loginRequest } from '../services/authService.js'
import { useState } from 'react'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginFormComponent() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault() // <-- evita recarregar a tela ao enviar form

    try {

      setLoading(true)
      const result = await loginRequest(email, senha)

      // limpa sessão antiga
      localStorage.clear();

      // salva token
      if (result?.access_token) {
        localStorage.setItem("token", result.access_token);
      }   
      
      // salva dados do usuário
      if (result?.nome) {
        localStorage.setItem("nome",result.nome);
      }

      if (result?.perfil) {
        localStorage.setItem("perfil", result.perfil.toLowerCase().trim());
      }

      const perfilUsuario =
      result?.perfil
        ?.toLowerCase()
        ?.trim();

      if (perfilUsuario === "admin") {
        toast.success(`Bem-vindo, ${result.nome || "Admin"}!`);
        navigate("/home-admin");

      } else if (perfilUsuario === "tecnico"){
        toast.success(`Bem-vindo, ${result.nome || "Técnico"}!`);
        navigate("/home-tecnico");

      } else if (perfilUsuario === "cliente"){
        toast.success(`Bem-vindo, ${result.nome || "Cliente"}!`);
        navigate("/home-cliente");

      } else if (perfilUsuario === "superadmin"){
        toast.success(`Bem-vindo, ${result.nome || "Super Admin"}!`);
        navigate("/home-superadmin");

      } else {
        toast.error("Perfil inválido.")
      }

    } catch (error) {


    const statusCode =
      error?.status ||
      error?.response?.status;

    const mensagem =
      error?.detail ||
      error?.response?.data?.detail;

    if (statusCode === 423 || statusCode === 403) {
      toast.error(mensagem || "Conta bloqueada.");

    } else if (statusCode === 401 || statusCode === 422) {
      toast.error("E-mail ou senha incorretos.");
      
    } else {
      toast.error(mensagem || "Erro ao realizar login");

    }

  } finally {

    setLoading(false);

  }
    
  }

  return (
    <div className=" bg-[#F5F5F3] flex flex-col items-center justify-center h-screen w-screen p-[32px]">
      <div className="w-[383px]">
        <div className="mb-[32px] w-[383px]">
          <h1 className="text-[24px] text-[#1A1A1A] font-sans"><b>Acessar Sistema</b></h1>
          <p className="text-[14px] font-sans text-[#6B6B6B]">Novo por aqui? <a className="text-blue-500 hover:underline" href="/register-company">Cadastre sua empresa</a></p>
        </div>

        <div className="flex flex-col">

        <form onSubmit={handleLogin}>
          <div className="mb-[15px]">
            <p className="font-mono text-[12px] text-[#6B6B6B]">E-EMAIL</p>
            <input placeholder="seu@email.com" className="px-[16px] py-[8px] bg-white border border-gray-300  w-full" 
            id="input-email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
          </div>

          <div className="mb-[15px]">
            <div className="flex justify-between">
              <p className="font-mono text-[12px] text-[#6B6B6B]">SENHA</p>
              <a className="text-blue-500 text-[11px] hover:underline">Esqueci a senha</a>
            </div>
            <input placeholder="°°°°°°°°°" className="px-[16px] py-[8px] bg-white border border-gray-300 w-full"
            id="input-senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            ></input>
          </div>

          <button className="bg-[#1E3A5F] text-white w-[383px] h-[39px] hover:bg-[#182e4b] transition-transform" type="submit" >{loading ? "Entrando..." : "Entrar"}</button>
        </form>

        </div>


      </div>

    </div>
  );
}

export default LoginFormComponent;
