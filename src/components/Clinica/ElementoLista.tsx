import { FC } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

import { Clinica } from "./ListaClinicas";

const ElementoLista: FC<Clinica> = ({
  id_clinica,
  nombre,
  direccion,
  imagen,
}) => {
  return (
    <li className="lista-clinicas__elemento">
      <h3>{nombre}</h3>
      <small>{direccion}</small>
      <img src={imagen} alt={nombre} />
      <div className="detalles">
        <Link to={`/${id_clinica}`}>Ver Detalles</Link>
      </div>
      <div className="footer_card">
        <Link to={`/actualizar-clinica/${id_clinica}`}>
          <FiEdit /> Editar
        </Link>
      </div>
    </li>
  );
};

export default ElementoLista;
