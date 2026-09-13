import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
