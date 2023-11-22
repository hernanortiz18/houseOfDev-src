import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "./commons/CardProperties";

import Contenido from "./components/Contenido";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      //            http://localhost:8000/
      .get("http://localhost:8000/api/users/me", { withCredentials: true })
      .then((res) => res.data)
      .then((user) => setUser(user))
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
          <Route path="/perfil" element={<Profile />} />
          <Route path="/results" element={<PropertyCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
