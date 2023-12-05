import { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import axios from "axios";

// import CardProperties from "../commons/CardProperties";
import FilterSideBar from "./FilterSideBar";
import "../styles/propertiesScreen.scss";
import GridPropertiesUsers from "../commons/GridPropertiesUsers";
import { useSelector } from "react-redux";

const Property = ({ search, ubicacion }) => {
  const [property, setProperty] = useState({});
  const filterProperty = useSelector((state) => state.properties);

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
          <FilterSideBar />
        </div>
        <div className="grid-properties-container">
          <GridPropertiesUsers
            filterProperty={filterProperty}
            property={property}
          />
        </div>
      </div>
    </>
  );
};

export default Property;
