import { useContext } from "react";
import Contexto from "../context/Contexto";

function Contenido3() {
  const { general, removeDestinoUser } = useContext(Contexto);
  // console.log(general);
  const { listaDestinosUser } = general;
  const hayDestinos = listaDestinosUser.length > 0;
  const total = listaDestinosUser.reduce(
    (accum, item) => item.precio + accum,
    0
  );
  return (
    <div className="contenido3">
      {hayDestinos ? (
        listaDestinosUser?.map((item) => (
          <div key={item.nombre} className="item-reservado">
            <button
              onClick={() => {
                removeDestinoUser(item.nombre);
                localStorage.setItem("general", JSON.stringify(general));
              }}
            >
              Anular
            </button>
            <p>
              {item.nombre} (${item.precio})
            </p>
          </div>
        ))
      ) : (
        <>
          <h3>Lugares a visitar</h3>
          <p>Todavia no has contratado ninguna actividad.</p>
          <p>
            Haz Click en <span>Capital y Patagonia</span> o{" "}
            <span>Norte y este</span> para ver las ofertas
          </p>
        </>
      )}

      <h2>Total a pagar: {total}$</h2>
      <h2>Referencia: {general.referencia}</h2>
    </div>
  );
}

export default Contenido3;
