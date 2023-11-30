import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminProperties.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AdminProperty({ data }) {
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8000/api/properties/admin/${data.id}`)
      .then((res) => {
        navigate("http://localhost:8000/api/properties/admin/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contenedorAdminPropiedades">
      <div className="imagenAdmin">
        <img src={data?.img} alt="Property" className="imagenPropiedadAdmin" />
      </div>
      <div className="infoAdmin">
        <div className="div-uno-admin">
          <div className="div-info-uno-admin">
            <div className="primerCuadradoAdmin">
              <p className="titulos">$ </p>
              <p className="margen">{data?.price}</p>
              <div className="lugar">
                <i className="bi bi-geo-alt-fill"></i>
                <p className="parrafoLugar">{data?.province}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="div-dos-admin">
          <div className="div-info">
            <i className="fa-solid fa-ruler-combined"></i>
            <p className="datas">{data?.squareMeters}</p>
            <p className="titulos">M </p>
          </div>
          <div className="div-info">
            <p className="datas">{data?.bedrooms}</p>
            <p className="titulos">Habitaciones </p>
            <i className="fa-solid fa-bed"></i>
          </div>
          <div className="div-info">
            <p className="datas">{data?.bathrooms}</p>
            <p className="titulos">Baños</p>
            <i className="fa-solid fa-bath"></i>
          </div>
        </div>

        <div className="div-tres-admin">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            omnis deserunt beatae, sequi suscipit modi nostrum cum delectus,
          </p>
        </div>

        <div className="div-cuatro-admin">
          <Link to="#">
            <Button variant="outline-primary">
              <i className="bi bi-heart-fill"></i>
            </Button>
          </Link>
          <Link to="contactate">
            <Button variant="outline-primary">
              <i className="bi bi-telephone-fill"></i>
            </Button>
          </Link>
          <Link to={`/propiedades/${data.id}`}>
            <Button variant="outline-primary">VER MÁS</Button>
          </Link>

          <Button variant="outline-primary" onClick={handleDelete}>
            <i className="fa-solid fa-trash-can"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminProperty;
