import { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import axios from "axios";
import CardUser from "../commons/CardUser";

const Profile = () => {
  const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/profile", { withCredentials: true })
      .then((res) => res.data)
      .then((user) => setUserLogin(user))
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
