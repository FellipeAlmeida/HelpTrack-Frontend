import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage"
import RegisterCompany from "./pages/RegisterCompanyPage.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/register-company" element={<RegisterCompany />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
