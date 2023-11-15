import axios from "axios";
import React, { useEffect } from "react";
import imagen from "../assets/img/Group179.png";

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
    <>
      <div>
        <div></div>
        <div></div>

        <div>House of Dev</div>
        <p>Tu nueva vivienda está aqui</p>
        <img src={imagen} alt="imagen" />
      </div>
    </>
  );
}

export default Home;
