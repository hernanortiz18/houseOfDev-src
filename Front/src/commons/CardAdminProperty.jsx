import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/AdminProperties.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CardAdminProperty({ data, onDelete }) {
  // const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/api/properties/admin/${data.id}`)
      .then(() => {
        onDelete(data.id);
        // navigate("http://localhost:8000/api/properties/admin/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contenedorAdmin">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={data?.img}
              className="img-fluid rounded-start"
              // style={{ width: "100%", height: "100%" }}
              alt="..."
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <p className="card-text">
                  <i class="fa-sharp fa-solid fa-dollar-sign"></i> {data.price}{" "}
                </p>
                <p className="card-text">
                  <i className="bi bi-geo-alt-fill"></i> {data.province}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="card-text">
                  <i className="fa-solid fa-ruler-combined"></i>{" "}
                  {data?.squareMeters}
                  {" Mt²"}
                </p>
                <p className="card-text">
                  <i class="fa-solid fa-bed"></i> {data?.bedrooms} {" dorm"}
                </p>
                <p className="card-text">
                  <i className="fa-solid fa-bath"></i> {data?.bathrooms}
                  {" Baños"}
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary">
                  <i className="bi bi-heart-fill"></i>
                </button>
                <Link to={"contactate"}>
                  <button className="btn btn-outline-primary">
                    <i className="bi bi-telephone-fill"></i>
                  </button>
                </Link>
                <Link to={`/propiedades/${data.id}`}>
                  <button className="btn btn-outline-primary">VER MÁS</button>
                </Link>
                <Button variant="outline-primary" onClick={handleDelete}>
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAdminProperty;
