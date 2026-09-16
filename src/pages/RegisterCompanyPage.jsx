import SideBar from '../components/SideBarLogin.jsx'
import RegisterCompanyComponent from '../components/RegisterCompanyComponent.jsx'

function RegisterCompanyPage(){
    return (
        <main className="flex">
            <SideBar 
                subtitulo="Cadastro de empresa"
                divHidden={true}
                divHiddenTwo={false}
                steps={[
                    {'titulo': 'Dados da empresa', 'position': 1},
                    {'titulo': 'Conta do administrador', 'position': 2}
                ]}
                hrHidden={true}
            />
            <RegisterCompanyComponent />
        </main>
    )
}

export default RegisterCompanyPage