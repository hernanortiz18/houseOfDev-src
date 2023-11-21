import { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import axios from "axios";
import CardProperties from "../commons/CardProperties";

const Property = () => {
  const [property, setProperty] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/properties", { withCredentials: true })
      .then((res) => res.data)
      .then((user) => setProperty(user))
      .catch(() => "Propiedad no encontrada");
  });

  return (
    <>
      <Navbar />
      <CardProperties />
    </>
  );
};

export default Property;
