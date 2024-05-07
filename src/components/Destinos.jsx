import { useParams } from "react-router-dom";
import data from "../data/data";
import { useContext } from "react";
import Contexto from "../context/Contexto";
import { useNavigate } from "react-router-dom";

function Destinos() {
  const { nombreDestino } = useParams();
  const destino = data.find((item) => item.nombre === nombreDestino);

  const { setListaDestinosUser, general, removeDestinoUser } =
    useContext(Contexto);
  const { listaDestinosUser } = general;
  const destinoUser = listaDestinosUser.find(
    (destinoUser) => destinoUser.nombre === destino.nombre
  );
  const navegacion = useNavigate();

  const volver = () => {
    navegacion(-1);
  };

  return (
    <div className="destinos-container">
      <h1>{destino.nombre}</h1>
      <p>{destino.servicio}</p>
      <div className="image-container">
        <img src={`/images/${destino.imagen}`} alt={destino.nombre} />
        <p className="price">${destino.precio}</p>
        <div className="action-buttons-container">
          {destinoUser ? (
            <button
              className="anular"
              onClick={() => {
                removeDestinoUser(destino.nombre);
                localStorage.setItem("general", JSON.stringify(general));
              }}
            >
              Anular
            </button>
          ) : (
            <button
              onClick={() => {
                setListaDestinosUser(destino);
                localStorage.setItem("general", JSON.stringify(general));
              }}
            >
              Reservar
            </button>
          )}
          <button onClick={volver}>Volver</button>
        </div>
      </div>
    </div>
  );
}

export default Destinos;
