import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarAdmin from "../commons/NavbarAdmin";
import { useNavigate, useParams } from "react-router";

function EditProperty() {
  // const navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/properties/${id}`)
      // .then((res) => res.data)
      //response.data.province accede al valor de esa propiedad
      .then((response) => {
        setProvince(response.data.province);
        setCity(response.data.city);
        setAddress(response.data.address);
        setNumber(response.data.number);
        setOnsale(response.data.onsale || false);
        setPrice(response.data.price);
        setImg(response.data.img || null);
        setSquareMeters(response.data.squareMeters);
        setBathrooms(response.data.bathrooms);
        setBedrooms(response.data.bedrooms);
      })

      .catch((error) => console.log(error));
  }, []);

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
    setImg(URL.createObjectURL(e.target.files[0]));
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

    //Lo nuevo

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
      .put(
        `http://localhost:8000/api/properties/update/${id}`,
        formData,

        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
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

  // .then(() => navigate("/admin"));

  return (
    <>
      <div className="container text-center">
        <NavbarAdmin />
        <div className="row">
          <div className="col">
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
                // value={img}
                onChange={handleImage}
                placeholder="Imagen"
                className="form-control"
              ></input>
              {/* {img && (
                <img
                  src={img}
                  alt="Property"
                  style={{ maxWidth: "50%", marginTop: "5px" }}
                />
              )} */}
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
export default EditProperty;
// {
//   province: province,
//   city: city,
//   address: address,
//   number: number,
//   onSale: onSale,
//   price: price,
//   img: img,
//   squareMeters: squareMeters,
//   bathrooms: bathrooms,
//   bedrooms: bedrooms,
// },
