import React, { useEffect, useState } from "react";

import NavbarAdmin from "../commons/NavbarAdmin";
import "../styles/createproperties.scss";

import axios from "axios";

import GridPropertiesAdmin from "../commons/GridPropertiesAdmin";

//Renderizamos las propiedades en admin!
const Admin = () => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/properties/all`)
      .then((res) => res.data)
      .then((properties) => setProperty(properties))
      .catch(() => "Propiedad no encontrada");
  }, []);

  return (
    <>
      <NavbarAdmin />
      <GridPropertiesAdmin property={property} />
    </>
  );
};

export default Admin;
