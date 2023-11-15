import axios from "axios";
import React, { useEffect } from "react";
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
        <div>House of Dev</div>
        <p>Tu nueva vivienda está aqui</p>
      </div>
    </>
  );
}

export default Home;
