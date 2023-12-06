import { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import { useSelector } from "react-redux";
import Carrusel from "../commons/Carrusel";
import GridPropertiesUsers from "../commons/GridPropertiesUsers";
import axios from "axios";

// import GridPropertiesUsers from "../commons/GridPropertiesUsers";

const Favorites = () => {
  const [favs, setFavs] = useState([]);
  const user = useSelector((state) => state.user);
  const id = user.id;

  useEffect(() => {
    if (id) {
      axios
        .get(
          `http://localhost:8000/api/favs`,
          {
            params: { prospectId: id },
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => setFavs(res.data));
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <Carrusel />
      <h1>Mis favoritos</h1>
      <GridPropertiesUsers property={favs} filterProperty={[]} />
    </>
  );
};

export default Favorites;
