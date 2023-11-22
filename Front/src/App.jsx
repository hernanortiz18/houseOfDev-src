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

import PropertyCard from "./commons/CardProperties";
import Contenido from "./components/Contenido";
import Profile from "./components/Profile";
import Alquiler from "./components/Alquiler";
import Venta from "./components/Venta";
import UserProperty from "./commons/UserProperty";

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
  axios
    .get("http://localhost:8000/api/properties/:id")
    .then((res) => res.data)
    .catch((Error) => console.error(Error));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contenido" element={<Contenido />} />
          <Route path="/alquiler" element={<Alquiler />} />
          <Route path="/venta" element={<Venta />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/results" element={<Property />} />
          <Route path="/alquiler/propiedades/:id" element={<UserProperty />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
