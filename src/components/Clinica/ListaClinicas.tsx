import { useEffect, useState } from "react";

import axios from "../../axios";
import ElementoLista from "./ElementoLista";

import "./ListaClinica.css";

export interface Clinica {
  id_clinica?: number;
  nombre: string;
  direccion: string;
  imagen: string;
}

const ListaClinicas = () => {
  const [clinicas, setClinicas] = useState<Clinica[]>([]);

  const obtenerClinicas = async () => {
    const listaClinicas: Clinica[] = await (
      await axios.get("/clinicas")
    ).data.clinicas;
    setClinicas(listaClinicas);
  };

  useEffect(() => {
    obtenerClinicas();
  }, []);

  return (
    <div className="contenedor-clinicas">
      <ul className="lista-clinicas">
        {clinicas.length > 0 ? (
          clinicas.map((clinica) => (
            <ElementoLista key={clinica.id_clinica} {...clinica} />
          ))
        ) : (
          <h2>No hay Clinicas / Hospitales</h2>
        )}
      </ul>
    </div>
  );
};

export default ListaClinicas;
