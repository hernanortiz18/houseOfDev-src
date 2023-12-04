import { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import axios from "axios";

// import CardProperties from "../commons/CardProperties";
import FilterSideBar from "./FilterSideBar";
import "../styles/propertiesScreen.scss";
import GridPropertiesUsers from "../commons/GridPropertiesUsers";

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
      .then((properties) => setProperty(properties))
      .catch(() => "Propiedad no encontrada");
  }, []);

  return (
    <>
      <Navbar />
      <div className="properties-screen-container">
        <div className="filter-container">
          <FilterSideBar property={property} />
        </div>
        <div className="grid-properties-container">
          <GridPropertiesUsers property={property} />
        </div>
      </div>
    </>
  );
};

export default Property;
