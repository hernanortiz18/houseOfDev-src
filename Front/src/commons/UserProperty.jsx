import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/properties.scss";

function UserProperty({ data }) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">Provincia</h6>
        <p className="card-text">{data?.province}</p>
        <h6 className="card-subtitle mb-2 text-muted">Ciudad</h6>
        <p className="card-text">{data?.city}</p>
        <h6 className="card-subtitle mb-2 text-muted">Dirección</h6>
        <p className="card-text">{data?.adress}</p>
        <h6 className="card-subtitle mb-2 text-muted">Número</h6>
        <p className="card-text">{data?.number}</p>
        <h6 className="card-subtitle mb-2 text-muted">Precio</h6>
        <p className="card-text">{data?.price}</p>
        <h6 className="card-subtitle mb-2 text-muted">Imagen</h6>
        {/* Considera cómo deseas mostrar la imagen */}
        <img src={data?.img} alt="Property" className="card-img-top" />
        <h6 className="card-subtitle mb-2 text-muted">Metros cuadrados</h6>
        <p className="card-text">{data?.squareMeters}</p>
        <h6 className="card-subtitle mb-2 text-muted">Baños</h6>
        <p className="card-text">{data?.bathrooms}</p>
        <h6 className="card-subtitle mb-2 text-muted">Habitaciones</h6>
        <p className="card-text">{data?.bedrooms}</p>
      </div>
    </div>
  );
}

export default UserProperty;
