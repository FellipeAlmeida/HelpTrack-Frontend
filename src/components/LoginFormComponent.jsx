import SideBar from './SideBarLogin.jsx'

function LoginFormComponent() {
  return (
    <div className=" bg-[#F5F5F3] flex flex-col items-center justify-center h-screen w-screen p-[32px]">

      <div className="w-[383px]">
        <div className="mb-[32px] w-[383px]">
          <h1 className="text-[24px] text-[#1A1A1A] font-sans"><b>Acessar Sistema</b></h1>
          <p className="text-[14px] font-sans text-[#6B6B6B]">Novo por aqui? <a className="text-blue-500 hover:underline">Cadastre sua empresa</a></p>
        </div>

        <div className="flex flex-col">

          <div className="mb-[15px]">
            <p className="font-mono text-[12px] text-[#6B6B6B]">E-EMAIL</p>
            <input placeholder="seu@email.com" className="px-[16px] py-[8px] bg-white border border-gray-300  w-full"></input>
          </div>

          <div className="mb-[15px]">
            <div className="flex justify-between">
              <p className="font-mono text-[12px] text-[#6B6B6B]">SENHA</p>
              <a className="text-blue-500 text-[11px] hover:underline">Esqueci a senha</a>
            </div>
            <input placeholder="°°°°°°°°°" className="px-[16px] py-[8px] bg-white border border-gray-300 w-full"></input>
          </div>

        </div>

        <button className="bg-[#1E3A5F] text-white w-[383px] h-[39px] hover:bg-[#182e4b]">Entrar</button>

      </div>

    </div>
  );
}

export default LoginFormComponent;
