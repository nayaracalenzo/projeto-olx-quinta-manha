import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Detalhes from "./pages/Detalhes.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/cadastro"} element={<Cadastro />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/anuncio/:id"} element={<Detalhes />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
