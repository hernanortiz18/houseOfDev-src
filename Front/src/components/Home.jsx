import axios from "axios";
import React, { useEffect } from "react";
import imagen from "../assets/img/Thumbnail.png";

import imagenDos from "../assets/img/Group179.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container-fluid h-100 text-center p-0">
      <div className="row h-100 m-0">
        <div className="col d-flex align-items-center justify-content-center p-0">
          <Link to="/login" style={{ width: "100%", height: "100%" }}>
            <img src={imagen} alt="imagen" className="w-100 h-100" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
