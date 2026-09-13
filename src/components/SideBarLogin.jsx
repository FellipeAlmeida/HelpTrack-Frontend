
function SideBar(){
    return (
        <div className="bg-[#1E3A5F] flex flex-col h-screen w-1/5 p-[48px] justify-between">
            <div>
                <h1 className="text-[white] text-[24px]"><b>HelpTrack</b></h1>
                <p className="text-[#5A738E] text-[12px] font-mono">Sistema de Chamados · SaaS</p>
            </div>

            <div>
                <p className="text-[12px] text-[#5A738E] font-mono">PLATAFORMA</p>

                <div className="flex justify-between my-[15px] text-[14px]">
                    <p className="text-[#8A9EB5]">Empresas ativas</p>
                    <p className="text-white">3</p>
                </div>

                <hr className="text-[#2A4B75]"></hr>

                <div className="flex justify-between my-[15px] text-[14px]">
                    <p className="text-[#8A9EB5]">Chamados este mês</p>
                    <p className="text-white">7</p>
                </div>

                <hr className="text-[#2A4B75]"></hr>

                <div className="flex justify-between my-[15px] text-[14px]">
                    <p className="text-[#8A9EB5]">Técnicos na plataforma</p>
                    <p className="text-white">4</p>
                </div>

                <hr className="text-[#2A4B75]"></hr>
            </div>

            <p className="text-[#5A738E] text-[12px] font-mono">© 2026 HelpTrack</p>
        </div>
    )
}

export default SideBar