import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Contenido1 from "../pages/Contenido1";
import Contenido2 from "../pages/Contenido2";
import Contenido3 from "../pages/Contenido3";
import { Navigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Destinos from "../components/Destinos";

function Router2() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="contenido1" element={<Contenido1 />} />
        <Route path="contenido2" element={<Contenido2 />} />
        <Route path="contenido3" element={<Contenido3 />} />
        <Route path="destinos/:nombreDestino" element={<Destinos />} />
        <Route path="/" element={<Navigate to={"contenido1"} />} />
        <Route path="*" element={<Navigate to={"contenido1"} />} />
      </Routes>
    </>
  );
}

export default Router2;
