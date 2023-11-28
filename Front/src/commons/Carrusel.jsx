import React from "react";
import "../styles/carrusel.scss";

function Carrusel() {
  return (
    <div className="carrusel">
      <h1>Propiedades en Alquiler</h1>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.cabanasbosquenativo.cl/wp-content/uploads/2021/07/canelo-web-B.jpg" // Replace with your image URL
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.lodgify.com/blog/wp-content/uploads/2019/11/cabin-1.png" // Replace with your image URL
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.homify.com/image/upload/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1453386285/p/photo/image/1262200/04.jpg" // Replace with your image URL
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carrusel;
