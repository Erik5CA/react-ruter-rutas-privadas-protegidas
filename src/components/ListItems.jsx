/* eslint-disable react/prop-types */
import data from "../data/data";
import Item from "./Item";

function ListItems({ region }) {
  const listaDestinos = data.filter((item) => item.zona === region);
  return (
    <div className="lista-container">
      {listaDestinos.map((destino, index) => (
        <Item key={index} destino={destino} />
      ))}
    </div>
  );
}

export default ListItems;
