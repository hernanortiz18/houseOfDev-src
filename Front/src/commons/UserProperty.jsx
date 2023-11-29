import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/properties.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//carrusel

function UserProperty({ data }) {
  return (
    <>
      <div className="contenedorPropiedades">
        <div className="imagen">
          <img src={data?.img} alt="Property" className="imagenPropiedad" />
        </div>
        <div className="info">
          <div className="div-uno">
            <div className="div-info-uno">
              <div className="primerCuadrado">
                <p className="titulos">$ </p>
                <p className="margen">{data?.price}</p>
                <div className="lugar">
                  {/* <p className="titulos"> */}
                  <i class="bi bi-geo-alt-fill"></i>
                  <p className="parrafoLugar">{data?.province}</p>
                  {/* </p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="div-dos">
            <div className="div-info">
              <i class="fa-solid fa-ruler-combined"></i>
              <p className="datas">{data?.squareMeters}</p>
              <p className="titulos">M </p>
            </div>
            <div className="div-info">
              <p className="datas">{data?.bedrooms}</p>
              <p className="titulos">Habitaciones </p>
              <i class="fa-solid fa-bed"></i>
            </div>
            <div className="div-info">
              <p className="datas">{data?.bathrooms}</p>
              <p className="titulos">Baños</p>
              <i class="fa-solid fa-bath"></i>
            </div>
          </div>
          {/* El div tres */}
          <div className="div-tres">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              omnis deserunt beatae, sequi suscipit modi nostrum cum delectus,
            </p>
          </div>

          {/* El div cuatro */}
          <div className="div-cuatro">
            <Link>
              <Button variant="outline-primary">
                <i className="bi bi-heart-fill"></i>
              </Button>
            </Link>
            <Link to={"contactate"}>
              <Button variant="outline-primary">
                <i class="bi bi-telephone-fill"></i>
              </Button>
            </Link>
            <Link to={`/propiedades/${data.id}`}>
              <Button variant="outline-primary ">VER MÁS</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProperty;
