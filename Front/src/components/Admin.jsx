import React, { useEffect, useState } from "react";

import NavbarAdmin from "../commons/NavbarAdmin";
import "../styles/createproperties.scss";
import CardProperties from "../commons/CardProperties";
import axios from "axios";

//Renderizamos las propiedades en admin!
const Admin = ({ search, ubicacion }) => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/properties/${search}`
        // { params: { ubicacion: `${ubicacion}` } },
        // {
        //   withCredentials: true,
        // }
      )
      .then((res) => res.data)
      .then((properties) => setProperty(properties))
      .catch(() => "Propiedad no encontrada");
  }, []);

  return (
    <>
      <NavbarAdmin />
      <CardProperties property={property} />
    </>
  );
};

export default Admin;
