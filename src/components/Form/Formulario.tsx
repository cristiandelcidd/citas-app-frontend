import { ChangeEventHandler, FC, FormEventHandler } from "react";
import { Clinica } from "../Clinica/ListaClinicas";

import "./Formulario.css";

export interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  clinica: Clinica;
  estado: string;
}

const Formulario: FC<Props> = ({ onSubmit, onChange, estado, clinica }) => {
  const { nombre, direccion, imagen } = clinica;
  return (
    <div className="formulario-contenedor">
      <h2>{estado} Clinica / Hospital</h2>
      <form onSubmit={onSubmit} className="formulario">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={onChange}
          placeholder="Ej. Kiko Marquez"
          autoComplete="off"
          value={nombre}
        />

        <label htmlFor="direccion">Direccion</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          placeholder="Ej. Tegucigalpa"
          value={direccion}
          onChange={onChange}
          autoComplete="off"
        />

        <label htmlFor="imagen">Imagen</label>
        <input
          type="url"
          id="image"
          name="imagen"
          placeholder="https://google.com/image.png"
          value={imagen}
          onChange={onChange}
          autoComplete="off"
        />
        <input type="submit" value={estado} />
      </form>
    </div>
  );
};

export default Formulario;
