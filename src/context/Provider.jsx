/* eslint-disable react/prop-types */
import { useReducer } from "react";
import Contexto from "./Contexto";
import { ReducerLogin, ReducerGeneral } from "./Reducer";
import types from "./types";

const init = () => {
  const valor = localStorage.getItem("estado");
  return {
    estado: !!valor,
  };
};
function Provider({ children }) {
  const loginUser = () => {
    localStorage.setItem("estado", true);
    dispatch({
      type: types.login,
    });
  };

  const logoutUser = () => {
    localStorage.removeItem("estado");
    dispatch({
      type: types.logout,
    });
  };

  const setReferencia = (payload) => {
    // localStorage.setItem("ref", payload);
    dispatchGeneral({
      type: types.setReferencia,
      payload: payload,
    });
  };

  const setListaDestinosUser = (payload) => {
    dispatchGeneral({
      type: types.setListaDestinosUser,
      payload: payload,
    });
  };

  const removeDestinoUser = (nombre) => {
    dispatchGeneral({
      type: types.removeDestinoUser,
      payload: nombre,
    });
  };

  const initialState = {
    referencia: "",
    listaDestinosUser: [],
  };

  const [logeado, dispatch] = useReducer(ReducerLogin, {}, init);
  const [general, dispatchGeneral] = useReducer(ReducerGeneral, initialState);
  return (
    <Contexto.Provider
      value={{
        ...logeado,
        loginUser,
        logoutUser,
        general,
        setReferencia,
        setListaDestinosUser,
        removeDestinoUser,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default Provider;
