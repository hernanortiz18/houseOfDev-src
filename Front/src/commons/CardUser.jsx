import { useContext, useState } from "react";
import axios from "axios";
import "../styles/profile.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setUser } from "../redux/user";

const CardUser = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = user;
  const [edit, setEdit] = useState(false);
  const [newPass, setNewPass] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    phone: 0,
  });

  const [password, setPassword] = useState({
    passwordActual: "",
    nuevaPassworrd: "",
  });

  const handleClick = (e) => {
    setEdit(!edit);
  };

  const handleClickPass = (e) => {
    setNewPass(!newPass);
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePass = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8000/api/users/update/?userEmail=${email}`,
        {
          name: userData.name,
          lastName: userData.lastName,
          phone: userData.phone,
        },
        { withCredentials: true }
      )
      .then((res) => dispatch(setUser(res.data)))
      .then(() => {
        setEdit(!edit);
      });
  };

  const handleSubmitPass = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8000/api/users/passwordValidate", {
        params: {
          email: email,
          password: password.passwordActual,
        },
      })
      .then((result) => {
        console.log("SALIÓ");
        if (!result) return "contraseña incorrecta";
        else {
          axios
            .put(
              `http://localhost:8000/api/users/updatePass/?userEmail=${user.email}`,
              {
                password: password.nuevaPassworrd,
              }
            )
            .then((res) => res.data)
            .then(() => {
              axios
                .post("http://localhost:8000/api/users/logout")
                .then(() => navigate("/login"));
            });
        }
      });
  };

  return (
    <div className="container-gral">
      <div className="buttons-profile">
        <button onClick={handleClick} className="editButton">
          <i></i> EDITAR
        </button>

        <button onClick={handleClickPass} className="passButton">
          <i></i> CAMBIAR PASSWORD
        </button>
      </div>
      <br />
      {!edit && (
        <div className="profile-container">
          <div className="userProfile">
            <h1>DATOS PERSONALES</h1>
            <div className="informacion">
              <p>NOMBRE COMPLETO</p>
              <h3>
                {user.name} {user.lastName}
              </h3>
              <p>TELÉFONO</p>
              <h3>{user.phone}</h3>
              <p>E-MAIL</p>
              <h3>{user.email}</h3>
            </div>
          </div>
        </div>
      )}

      {edit && (
        <div>
          <div className="userProfile-edit">
            <h1>DATOS PERSONALES</h1>
            <h3>NOMBRE COMPLETO</h3>
            <form onSubmit={handleSubmit} className="informacion">
              <input
                type="text"
                value={userData.name}
                name="name"
                placeholder="NAME"
                onChange={handleChange}
              />

              <input
                type="text"
                value={userData.lastName}
                name="lastName"
                placeholder="LAST NAME"
                onChange={handleChange}
              />
              <br />
              <h3>TELEFONO</h3>
              <input
                type="text"
                value={userData.phone}
                name="phone"
                placeholder="PHONE"
                onChange={handleChange}
              />
              <br />
              <h3>E-MAIL</h3>
              <input
                type="text"
                value={userData.email}
                name="email"
                placeholder={user.email}
                disabled
              />
              <br />

              <button type="submit">GUARDAR</button>
            </form>
          </div>
        </div>
      )}
      {newPass && (
        <>
          <form onSubmit={handleSubmitPass} className="informacion">
            <label htmlFor="password">PASSWORD ACTUAL</label>
            <br />
            <input
              type="password"
              name="passwordActual"
              value={password.passwordActual}
              placeholder="ESCRIBA SU PASSWORD ACTUAL"
              onChange={handleChangePass}
            />
            <br />

            <label htmlFor="password">PASSWORD NUEVA</label>
            <br />
            <input
              type="password"
              name="nuevaPassword"
              value={password.nuevaPassword}
              placeholder="ESCRIBA SU PASSWORD NUEVA"
              onChange={handleChangePass}
            />
            <br />
            <button type="submit">GUARDAR</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CardUser;
