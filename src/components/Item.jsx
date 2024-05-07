/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router-dom";
import Contexto from "../context/Contexto";

function Item({ destino }) {
  const { general } = useContext(Contexto);
  const { listaDestinosUser } = general;
  const destinoUser = listaDestinosUser.find(
    (destinoUser) => destinoUser.nombre === destino.nombre
  );
  // console.log(destinoUser);
  return (
    <div className="item">
      <h3>{destino.nombre}</h3>
      <p>{destino.situacion}</p>
      <img src={`/images/${destino.imagen}`} alt={destino.nombre} />
      <div className="item-info">
        <Link to={`/destinos/${destino.nombre}`}> Mas Info</Link>
        {destinoUser && <p>Reservado</p>}
      </div>
    </div>
  );
}

export default Item;
