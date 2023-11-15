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
      <div>Home</div>
    </>
  );
}

export default Home;
