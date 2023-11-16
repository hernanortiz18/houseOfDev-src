import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("/api/me")
      .then((res) => res.data)
      .then((user) => setUser(user))
      .catch(() => console.log("Necesitas loguearte con tu cuenta de usuario"));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
