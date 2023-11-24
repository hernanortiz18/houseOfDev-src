import React, { useState } from "react";

function CreateProperty() {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [onSale, setOnsale] = useState(Boolean);
  const [img, setImg] = useState([]);
  const [squareMeters, setSquareMeters] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleSubmit = (e) => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Nueva Propiedad</h1>
        <input placeholder="province" className="form-control"></input>
        <input placeholder="city" className="form-control"></input>
        <input placeholder="address" className="form-control"></input>
        <input placeholder="number" className="form-control"></input>
        <input placeholder="onSale" className="form-control"></input>
        <input placeholder="img" className="form-control"></input>
        <input placeholder="squareMeters" className="form-control"></input>
        <input placeholder="bathrooms" className="form-control"></input>
        <input placeholder="bedrooms" className="form-control"></input>
        <br />
      </form>
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
