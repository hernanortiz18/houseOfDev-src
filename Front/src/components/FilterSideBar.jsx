import { useEffect } from "react";

const FilterSideBar = () => {
  const [filter, setFilter] = useState(false);

  useEffect();

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <>
      <div className="filter-side-bar">
        <button onClick={handleFilter}>Filter</button>
        {/* {filter && (
          <select
            name="province"
            id="province"
            className="for-select form-select-sm mb-3"
            aria-label="Seleccione una provincia"
          >

          </select>
          <select
          name="city"
          id="city"
          className="for-select form-select-sm mb-3"
          aria-label="Seleccione una provincia"
        >

        </select>
        <select
        name=""
        id="province"
        className="for-select form-select-sm mb-3"
        aria-label="Seleccione una provincia"
      >

      </select>
        )} */}
      </div>
    </>
  );
};

export default FilterSideBar;
