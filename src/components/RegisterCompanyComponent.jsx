function RegisterCompanyComponent(){
    return (
        <main className="flex flex-col bg-[#F5F5F3] h-screen w-screen justify-center items-center p-[32px]">
            <div className="w-[383px]">
                <div className="w-full mb-16">
                    <h1 className="text-[24px] font-[#1A1A1A] font-sans"><b>Cadastre sua empresa</b></h1>
                    <p className="font-sans text-[14px] text-[#5A738E]">Já tem conta? <a className="text-blue-500 hover:underline" href="/">Faça login</a></p>
                </div>

                <div>
                    <div className="mb-[16px]">
                        <p className="text-[12px] font-mono text-[#6B6B6B] mb-[5px]">NOME DA EMPRESA <span className="text-red-500">*</span></p>
                        <input placeholder="Ex: Contábil Nogueira & Filhos" type="text" className="w-full h-[42px] border-1 border-gray-400 bg-white px-[12px]"></input>
                    </div>

                    <div className="mb-3.5">
                        <p className="font-mono text-[#6B6B6B] text-[12px] mb-[5px]">CNPJ <span className="text-red-500">*</span></p>
                        <input placeholder="Ex: AAAAAAAAAAAA12" className="w-full h-[42px] border-1 border-gray-400 bg-white px-[12px]"></input>
                    </div>
                
                    <button className="bg-[#8997A9] text-white w-full h-[40px]">Continuar →</button>
                </div>
            </div>
            
        </main>
    )
}

export default RegisterCompanyComponent