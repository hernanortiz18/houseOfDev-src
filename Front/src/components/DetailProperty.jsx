import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Property from "./Property";

const DetailProperty = () => {
  const [data, setData] = useState({});

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/properties/${id}`)
      .then((res) => res.data)
      .then((thisProperty) => setData(thisProperty));
  }, []);

  return (
    <>
      <div className="properties">
        <h1>Propiedades</h1>
        <h2>Provincia</h2>
        <p>{data?.province}</p>
        <h2>Ciudad</h2>
        <p>{data?.city}</p>
        <h2>Dirección</h2>
        <p>{data?.adress}</p>
        <h2>número</h2>
        <p>{data?.number}</p>
        <h2>Precio</h2>
        <p>{data?.price}</p>
      </div>
    </>
  );
};

export default DetailProperty;