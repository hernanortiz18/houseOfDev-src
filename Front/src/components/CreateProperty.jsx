import axios from "axios";
import React, { useState } from "react";
import NavbarAdmin from "../commons/NavbarAdmin";

function CreateProperty() {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [onSale, setOnsale] = useState(false);
  const [price, setPrice] = useState("");
  const [img, setImg] = useState(null);
  const [squareMeters, setSquareMeters] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleProvince = (e) => {
    setProvince(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleOnsale = (e) => {
    setOnsale(!onSale);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleImage = (e) => {
    setImg(e.target.files[0]);
  };
  const handleSquareMeters = (e) => {
    setSquareMeters(e.target.value);
  };
  const handleBathrooms = (e) => {
    setBathrooms(e.target.value);
  };
  const handleBedrooms = (e) => {
    setBedrooms(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", img);
    formData.append("province", province);
    formData.append("city", city);
    formData.append("number", number);
    formData.append("onSale", onSale);
    formData.append("price", price);
    formData.append("address", address);
    formData.append("squareMeters", squareMeters);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);

    axios
      .post("http://localhost:8000/api/properties/register", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data)
      .then(() => {
        setProvince("");
        setCity("");
        setAddress("");
        setNumber("");
        setOnsale(false);
        setPrice("");
        setImg(null);
        setSquareMeters("");
        setBathrooms("");
        setBedrooms("");
      });
  };

  return (
    <>
      <NavbarAdmin />
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <form onSubmit={handleSubmit} className="row g-3">
              <h1 className="titulo">Nueva Propiedad</h1>
              <label className="label">Provincia</label>
              <input
                value={province}
                onChange={handleProvince}
                placeholder="Provincia"
                className="form-control"
              ></input>

              <label className="label">Ciudad</label>
              <input
                value={city}
                onChange={handleCity}
                placeholder="Ciudad"
                className="form-control"
              ></input>
              <label className="label">Dirección</label>
              <input
                value={address}
                onChange={handleAddress}
                placeholder="Dirección"
                className="form-control"
              ></input>
              <label className="label">Numero de dirreción</label>
              <input
                value={number}
                onChange={handleNumber}
                placeholder="Numero de dirreción"
                className="form-control"
              ></input>

              {/* <input
                value={onSale}
                onChange={handleOnsale}
                placeholder="onSale"
                className="form-control"
              ></input> */}
              <label className="label">Precio</label>
              <input
                value={price}
                onChange={handlePrice}
                placeholder="Precio"
                className="form-control"
              ></input>
              <label className="label">Imagen</label>
              <input
                type="file"
                onChange={handleImage}
                placeholder="Imagen"
                className="form-control"
              ></input>
              <label className="label">Metros Cuadrados</label>
              <input
                value={squareMeters}
                onChange={handleSquareMeters}
                placeholder="Metros Cuadrados"
                className="form-control"
              ></input>
              <label className="label">Baños</label>
              <input
                value={bathrooms}
                onChange={handleBathrooms}
                placeholder="Baños"
                className="form-control"
              ></input>
              <label className="label">Habitaciones</label>
              <input
                value={bedrooms}
                onChange={handleBedrooms}
                placeholder="Habitaciones"
                className="form-control"
              ></input>
              <br />

              <div className="form-check-admin">
                <div className="form-check-option">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Alquiler"
                    onChange={handleOnsale}
                    // onChange={handleOnsale}
                    placeholder="Alquiler"
                    id="Alquiler"
                    // checked={onSale === "Alquiler"}
                    checked={!onSale}
                  />
                  <label className="form-check-label" htmlFor="Alquiler">
                    Alquiler
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Comprar"
                    onChange={handleOnsale}
                    // onChange={handleOnsale}
                    placeholder="Comprar"
                    id="Comprar"
                    checked={onSale}
                  />
                  <label className="form-check-label" htmlFor="Comprar">
                    Comprar
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-success registrar">
                Registrar Nueva Propiedad
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProperty;
