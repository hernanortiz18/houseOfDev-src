import React, { useState } from "react";

function Login() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Inicio de Sesión</h1>
      <form>
        <label>Nombre</label>
        <br />
        <label>Email</label>
        <br />
        <label>Password</label>
      </form>
    </>
  );
}

export default Login;
