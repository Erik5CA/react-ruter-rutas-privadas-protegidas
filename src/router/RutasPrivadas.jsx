/* eslint-disable react/prop-types */
import { useContext } from "react";
import Contexto from "../context/Contexto";
import { Navigate } from "react-router-dom";

function RutasPrivadas({ children }) {
  const { estado } = useContext(Contexto);
  return estado ? children : <Navigate to={"/login"} />;
}

export default RutasPrivadas;
