import types from "./types";

export function ReducerLogin(state, action) {
  switch (action.type) {
    case types.login:
      return {
        estado: true,
      };
    case types.logout:
      return {
        estado: false,
      };
    default:
      return state;
  }
}

export function ReducerGeneral(state, action) {
  switch (action.type) {
    case types.setReferencia:
      return {
        ...state,
        referencia: action.payload,
      };
    case types.setListaDestinosUser:
      return {
        ...state,
        listaDestinosUser: [...state.listaDestinosUser, action.payload],
      };
    case types.removeDestinoUser:
      return {
        ...state,
        listaDestinosUser: state.listaDestinosUser.filter(
          (destino) => destino.nombre !== action.payload
        ),
      };
    default:
      return state;
  }
}
