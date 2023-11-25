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
  const [img, setImg] = useState("");
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
    setOnsale(e.target.value === "Comprar");
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleImage = (e) => {
    setImg(e.target.value);
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
    axios
      .post(
        "http://localhost:8000/api/properties/register",
        {
          province: province,
          city: city,
          address: address,
          number: number,
          onSale: onSale,
          price: price,
          img: img,
          squareMeters: squareMeters,
          bathrooms: bathrooms,
          bedrooms: bedrooms,
        },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => {
        setProvince("");
        setCity("");
        setAddress("");
        setNumber("");
        setOnsale("");
        setImg("");
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
              <h1>Nueva Propiedad</h1>
              <input
                value={province}
                onChange={handleProvince}
                placeholder="province"
                className="form-control"
              ></input>

              <input
                value={city}
                onChange={handleCity}
                placeholder="city"
                className="form-control"
              ></input>

              <input
                value={address}
                onChange={handleAddress}
                placeholder="address"
                className="form-control"
              ></input>

              <input
                value={number}
                onChange={handleNumber}
                placeholder="number"
                className="form-control"
              ></input>

              {/* <input
                value={onSale}
                onChange={handleOnsale}
                placeholder="onSale"
                className="form-control"
              ></input> */}

              <input
                value={price}
                onChange={handlePrice}
                placeholder="price"
                className="form-control"
              ></input>

              <input
                value={img}
                onChange={handleImage}
                placeholder="img"
                className="form-control"
              ></input>

              <input
                value={squareMeters}
                onChange={handleSquareMeters}
                placeholder="squareMeters"
                className="form-control"
              ></input>

              <input
                value={bathrooms}
                onChange={handleBathrooms}
                placeholder="bathrooms"
                className="form-control"
              ></input>
              <input
                value={bedrooms}
                onChange={handleBedrooms}
                placeholder="bedrooms"
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
              <button type="submit" className="btn btn-success mx-2">
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

// {
//   "province": "Córdoba",
//   "city": "Alpa Corral",
//   "adress": "436",
//   "number": "651",
//   "onSale": "true",
//   "price": "700",
//   "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCVRr7ZCbUy20ngTArBtw2bs-TrB6THUeLg&usqp=CAU",
//   "squareMeters":"34",
//   "bathrooms":"2",
//   "bedrooms":"2"
// }
