import { useEffect, useState } from "react";
import Navbar from "../commons/Navbar";
import axios from "axios";
import CardUser from "../commons/CardUser";
import { useSelector } from "react-redux";

const Profile = () => {
  const [userLogin, setUserLogin] = useState({});

  const user = useSelector((state) => state.user);
  const { email } = user;

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:8000/api/users/profile/?email=${email}`, {
          withCredentials: true,
        })
        .then((res) => res.data)
        .then((result) => setUserLogin(result))
        .catch(() => "Usuario no encontrado");
    }
    [user];
  });

  return (
    <>
      <Navbar />
      <CardUser user={userLogin} />
    </>
  );
};

export default Profile;
