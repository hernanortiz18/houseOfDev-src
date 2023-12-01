import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import axios from "axios";

import Property from "./components/Property";
import { setUser } from "./redux/user";

import { useDispatch } from "react-redux";

import Contenido from "./components/Contenido";
import Profile from "./components/Profile";
import Alquiler from "./components/Alquiler";
import Venta from "./components/Venta";

import DetailProperty from "./components/DetailProperty";

import UserProperty from "./commons/UserProperty";

import CreateProperty from "./components/CreateProperty";
import Admin from "./components/Admin";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      //            http://localhost:8000/
      .get("http://localhost:8000/api/users/me", { withCredentials: true })
      .then((res) => res.data)
      .then((user) => dispatch(setUser(user)))
      .catch(() => console.log("Necesitas loguearte con tu cuenta de usuario"));
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contenido" element={<Contenido />} />
          <Route path="/alquiler/:ubicacion" element={<Alquiler />} />
          <Route path="/comprar/:ubicacion" element={<Venta />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/propiedades/:id" element={<DetailProperty />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/crearPropiedades" element={<CreateProperty />} />
          <Route path="/reservas" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
