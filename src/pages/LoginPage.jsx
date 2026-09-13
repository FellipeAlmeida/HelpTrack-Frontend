import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormComponent from "../components/LoginFormComponent.jsx";
import SideBar from "../components/SideBarLogin.jsx";

function Login(){ 
    return (
        <main className="flex">
            <SideBar/>
            <LoginFormComponent />
        </main>
    )
}

export default Login