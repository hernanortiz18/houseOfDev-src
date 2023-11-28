import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/properties.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Button } from "react-bootstrap";
//carrusel

function UserProperty({ data }) {
  return (
    <>
      <div className="contenedor">
        <div className="imagen">
          <img src={data?.img} alt="Property" className="imagenPropiedad" />
        </div>
        <div className="info">
          <div className="div-uno">
            <div className="div-info">
              <div className="primerCuadrado">
                <h5 className="titulos">$ </h5>
                <h5 className="margen">{data?.price}</h5>
              </div>
            </div>
            <div className="div-info">
              <h5 className="titulos">
                <i class="bi bi-geo-alt-fill"></i>
              </h5>
              <h5 className="parrafo">{data?.province}</h5>
            </div>
          </div>
          {/* El div- dos */}
          <div className="div-dos">
            <div className="div-info">
              <i class="fa-solid fa-ruler-combined"></i>
              <h5 className="datas">{data?.squareMeters}</h5>
              <h5 className="titulos">M </h5>
            </div>
            <div className="div-info">
              <h5 className="datas">{data?.bedrooms}</h5>
              <h5 className="titulos">Habitaciones </h5>
              <i class="fa-solid fa-bed"></i>
            </div>
            <div className="div-info">
              <h5 className="datas">{data?.bathrooms}</h5>
              <h5 className="titulos">Baños</h5>
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
            <Button variant="outline-primary">
              <i className="bi bi-heart-fill"></i>
            </Button>
            <Button variant="outline-primary">
              <i class="bi bi-telephone-fill"></i>
            </Button>
            <Button variant="outline-primary ">VER MÁS</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProperty;
