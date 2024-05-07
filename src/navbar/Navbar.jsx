import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Contexto from "../context/Contexto";

function Navbar() {
  const navegacion = useNavigate();
  const { logoutUser } = useContext(Contexto);
  const login = () => {
    navegacion("/login", { replace: true });
    logoutUser();
  };
  return (
    <>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "activo" : null)}
          to={"contenido1"}
        >
          Capital y Patagonia
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activo" : null)}
          to={"contenido2"}
        >
          Norte y este
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activo" : null)}
          to={"contenido3"}
        >
          Ruta
        </NavLink>
        <button onClick={login}>Logout</button>
      </nav>
    </>
  );
}

export default Navbar;
