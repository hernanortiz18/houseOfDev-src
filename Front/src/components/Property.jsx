import { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import axios from "axios";
import CardProperties from "../commons/CardProperties";
import { useParams } from "react-router";

const Property = ({ search }) => {
  const [property, setProperty] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/properties/${search}`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((properties) => setProperty(properties))
      .catch(() => "Propiedad no encontrada");
  }, []);

  console.log("//////////////////////PROPERTY////////////////////", property);

  return (
    <>
      <Navbar />
      <CardProperties property={property} />
    </>
  );
};

export default Property;
