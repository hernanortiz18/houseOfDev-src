import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/properties.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";

function UserProperty({ data }) {
  const user = useSelector((state) => state.user);
  const userId = user.id;
  const propId = data.id;

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/favs/register", {
        prospectId: userId,
        propertyId: propId,
      })
      .then(() => {
        toast.update("AGREGADA A FAVORITOS");
      })
      .catch(() => {
        toast.error("PRUEBA IS ACTIVE");
      });
  };

  return (
    <>
      <div className="contenedorUserPropiedades mb-4">
        <div className="row">
          <div className="col-md-3">
            <div className="imagen">
              <img src={data?.img} alt="Property" className="imagenPropiedad" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="info">
              <div className="div-uno">
                <div className="div-info-uno">
                  <div className="primerCuadrado">
                    <p className="titulos">$ </p>
                    <p className="margen">{data?.price}</p>
                    <div className="lugar">
                      <i className="bi bi-geo-alt-fill"></i>
                      <p className="parrafoLugar">{data?.province}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="div-dos">
                <div className="div-info">
                  <i className="fa-solid fa-ruler-combined"></i>
                  <p className="datas">{data?.squareMeters}</p>
                  <p className="titulos">M </p>
                </div>
                <div className="div-info">
                  <i class="fa-solid fa-bed"></i>
                  <p className="datas">{data?.bedrooms}</p>
                  <p className="titulos">Habitaciones </p>
                </div>
                <div className="div-info">
                  <i className="fa-solid fa-bath"></i>
                  <p className="datas">{data?.bathrooms}</p>
                  <p className="titulos">Baños</p>
                </div>
              </div>

              <div className="div-tres">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore omnis deserunt beatae, sequi suscipit modi nostrum
                  cum delectus,
                </p>
              </div>

              <div className="div-cuatro">
                <ToastContainer />
                <Button onClick={handleClick} variant="outline-primary">
                  <i className="bi bi-heart-fill"></i>
                </Button>
                <Link to={"contactate"}>
                  <Button variant="outline-primary">
                    <i className="bi bi-telephone-fill"></i>
                  </Button>
                </Link>
                <Link to={`/propiedades/${data.id}`}>
                  <Button variant="outline-primary ">VER MÁS</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProperty;
