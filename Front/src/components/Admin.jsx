import React, { useEffect, useState } from "react";

import NavbarAdmin from "../commons/NavbarAdmin";
import "../styles/createproperties.scss";

import axios from "axios";
import GridPropertiesAdmin from "../commons/GridPropertiesAdmin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

//Renderizamos las propiedades en admin!
const Admin = () => {
  const user = useSelector((state) => state.user);
  const isAdmin = user.isAdmin;
  const navigate = useNavigate();
  const [property, setProperty] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/properties/all`)
      .then((res) => res.data)
      .then((properties) => setProperty(properties))
      .catch(() => "Propiedad no encontrada");
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/properties/all`)
  //     .then((res) => res.data)
  //     .then((properties) => setProperty(properties))
  //     .catch(() => "Propiedad no encontrada");
  // }, []);

  return (
    <>
      {isAdmin ? (
        <div>
          <NavbarAdmin />
          <GridPropertiesAdmin property={property} />
        </div>
      ) : (
        navigate("/contenido")
      )}
    </>
  );
};

export default Admin;
