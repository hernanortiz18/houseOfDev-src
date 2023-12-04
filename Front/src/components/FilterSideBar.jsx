import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSideBar = ({ property }) => {
  const uniqueValues = {};

  if (property.length > 0) {
    // Iterar sobre las propiedades para obtener valores únicos por cada propiedad
    ["province", "city", "bedrooms"].forEach((prop) => {
      uniqueValues[prop] = [...new Set(property.map((item) => item[prop]))];
    });
  }

  const [filter, setFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleSearchParams = (e) => {
    const { name, value } = e.target;

    if (value !== "") {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      setSearchParams(params);
    }
  };

  const handlePrice = (e) => {
    const { name, value } = e.target;

    if (value !== "") {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      setSearchParams(params);
    } else {
      const params = new URLSearchParams(searchParams);
      params.delete(name);
      setSearchParams(params);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefautl();
    axios
      .get(`http://localhost:8000/api/properties?${searchParams}`)
      .then(() => console.log("SALIÓ EL SUBMIT DE FILTER"));
  };

  return (
    <>
      <div className="filter-side-bar">
        <button onClick={handleFilter}>Filter</button>
        {filter && (
          <form onSubmit={handleSubmit} className="form-filter">
            <br />
            <select
              name="province"
              id="province"
              className="for-select form-select-md mb-3"
              onChange={handleSearchParams}
            >
              <option value="" id="optionName" disabled selected>
                PROVINCIA
              </option>
              {uniqueValues.province &&
                uniqueValues.province.map((province, i) => (
                  <option key={i} value={province}>
                    {province}
                  </option>
                ))}
            </select>
            <br />

            <select
              name="city"
              id="city"
              className="for-select form-select-md mb-3"
              onChange={handleSearchParams}
            >
              <option value="" id="optionName" disabled selected>
                CIUDAD
              </option>
              {uniqueValues.city &&
                uniqueValues.city.map((city, i) => (
                  <option key={i} value={city}>
                    {city}
                  </option>
                ))}
            </select>
            <br />
            <select
              name="bedrooms"
              id="bedrooms"
              className="for-select form-select-md mb-3"
              onChange={handleSearchParams}
            >
              <option value="" id="optionName" disabled selected>
                HABITACIONES
              </option>
              {uniqueValues.bedrooms &&
                uniqueValues.bedrooms.map((bedrooms, i) => (
                  <option key={i} value={bedrooms}>
                    {bedrooms}
                  </option>
                ))}
            </select>
            <br />
            <label htmlFor="price">VALOR (USD)</label>
            <input
              type="text"
              name="price"
              placeholder="MAX"
              value=""
              onChange={handlePrice}
            />
            <button type="submit">APLICAR FILTROS</button>
          </form>
        )}
      </div>
    </>
  );
};

export default FilterSideBar;
