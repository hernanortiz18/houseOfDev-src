import axios from "axios";
import React, { useEffect } from "react";
import imagen from "../assets/img/Thumbnail.png";

import imagenDos from "../assets/img/Group179.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.scss";

function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("hola");
  return (
    <div className="vista-home">
      <Link to="/contenido">
        <img src={imagenDos} alt="imagen" className="imagen-home" />
      </Link>
    </div>
  );
}

export default Home;
