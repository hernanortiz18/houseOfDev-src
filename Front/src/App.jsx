import "./App.css";
import Login from "./components/login";
import Register from "./components/Register";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
