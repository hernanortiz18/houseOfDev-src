import { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import axios from "axios";
import CardProperties from "../commons/CardProperties";
import FilterSideBar from "./FilterSideBar";

const Property = ({ search, ubicacion }) => {
  const [property, setProperty] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/properties/${search}`,
        { params: { ubicacion: `${ubicacion}` } },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .then((result) => console.log(result))
      // .then((properties) => setProperty(properties))
      .catch(() => "Propiedad no encontrada");
  }, []);

  console.log("//////////////////////PROPERTY////////////////////", property);

  return (
    <>
      <Navbar />
      <FilterSideBar />
      <CardProperties property={property} />
    </>
  );
};

export default Property;
