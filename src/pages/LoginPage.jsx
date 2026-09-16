import LoginFormComponent from "../components/LoginFormComponent.jsx";
import SideBar from "../components/SideBarLogin.jsx";

function Login(){ 
    return (
        <main className="flex">
            <SideBar 
                subtitulo="Sistema de Chamados · SaaS"
                minititulo="PLATAFORMA"
                systemInfos={[
                    {'titulo': 'Empresas ativas', 'info': 3},
                    {'titulo': 'Chamados este mẽs', 'info': 7},
                    {'titulo': 'Técnicos na plataforma', 'info': 4}
                ]}
                divHidden={false}
                divHiddenTwo={true}
                hrHidden={false}
            />
            <LoginFormComponent />
        </main>
    )
}

export default Login