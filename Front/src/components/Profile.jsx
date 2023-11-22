import { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import axios from "axios";
import CardUser from "../commons/CardUser";
import { useSelector } from "react-redux";

const Profile = () => {
  const [userLogin, setUserLogin] = useState({});

  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/profile", { withCredentials: true })
      .then((res) => res.data)
      .then((result) => setUserLogin(result))
      .catch(() => "Usuario no encontrado");
  });

  return (
    <>
      <Navbar />
      <CardUser user={userLogin} />
    </>
  );
};

export default Profile;
