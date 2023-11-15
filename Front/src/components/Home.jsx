import axios from "axios";
import React, { useEffect } from "react";
import imagen from "../assets/img/Thumbnail.png";
import imagenDos from "../assets/img/Group179.png";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container text center">
      <div className="row">
        <div className="col">
          <Link to="/login">
            <img src={imagen} alt="imagen" className="w-100 h-100" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
