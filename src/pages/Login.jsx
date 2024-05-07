import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../context/Contexto";
import "../styles/Login.css";
import { useState } from "react";

function Login() {
  const [referencia, setReferenciaUser] = useState("");
  const navegacion = useNavigate();
  const { loginUser, setReferencia } = useContext(Contexto);
  const login = () => {
    if (referencia === "") return;
    navegacion("/", { replace: true });
    loginUser("user");
    setReferencia(referencia);
  };
  return (
    <div className="login-container">
      <form className="form-login" action="">
        <h1>Vive el país</h1>
        <label htmlFor="referencia">Referencia: </label>
        <input
          type="text"
          name="referencia"
          id="referencia"
          placeholder="Referencia de tu billete"
          onChange={(e) => setReferenciaUser(e.target.value)}
        />
        <button type="button" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
