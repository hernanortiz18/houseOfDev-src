import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/properties.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

function UserProperty({ data }) {
  return (
    <div className="contenedor">
      <div className="imagen">
        <img src={data?.img} alt="Property" className="imagenPropiedad" />
      </div>
      <div className="info">
        <div className="div-info">
          <h5 className="titulos">
            <i class="bi bi-geo-alt-fill"></i> Provincia :
          </h5>
          <h5 className="parrafo">{data?.province}</h5>
        </div>
        <div className="div-info">
          <h5 className="titulos">Ciudad :</h5>
          <h5 className="">{data?.city}</h5>
        </div>

        <div className="div-info">
          <h5 className="titulos">Dirección :</h5>
          <h5 className="">{data?.adress}</h5>
        </div>

        <div className="div-info">
          <h5 className="titulos">Número de Télefono : </h5>
          <h5 className="">{data?.number}</h5>
        </div>

        <div className="div-info">
          <h5 className="titulos">Precio : </h5>
          <h5 className="">{data?.price}</h5>
        </div>

        <div className="div-info">
          <h5 className="titulos">Metros cuadrados : </h5>
          <h5 className="">{data?.squareMeters}</h5>
        </div>

        <div className="div-info">
          <h5 className="titulos">Baños : </h5>
          <h5 className="">{data?.bathrooms}</h5>
        </div>

        <div className="div-info">
          <h5 className="titulos">Habitaciones : </h5>
          <h5 className="">{data?.bedrooms}</h5>
        </div>
      </div>
    </div>
  );
}

export default UserProperty;
