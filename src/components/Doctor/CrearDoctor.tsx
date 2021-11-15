import { ChangeEvent, useEffect, useState, FormEvent } from "react";

import axios from "../../axios";
import { Clinica } from "../Clinica/ListaClinicas";

import "../Form/Formulario.css";

interface Doctor {
  id_doctor?: number;
  codigo_doctor: string;
  nombre: string;
  edad: number;
  id_clinica: number;
}

const CrearDoctor = () => {
  const [clinicas, setClinicas] = useState<Clinica[]>([]);
  const [doctor, setDoctor] = useState<Doctor>({
    codigo_doctor: "",
    nombre: "",
    edad: 0,
    id_clinica: 0,
  });

  const { codigo_doctor, nombre, edad, id_clinica } = doctor;

  const obtenerClinicas = async () => {
    const listaClinicas: Clinica[] = await (
      await axios.get("/clinicas")
    ).data.clinicas;
    setClinicas(listaClinicas);
  };

  useEffect(() => {
    obtenerClinicas();
  }, []);

  const onChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    setDoctor({
      ...doctor,
      [name]: value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      codigo_doctor?.trim().length > 10 ||
      nombre?.trim().length === 0 ||
      edad === 0 ||
      id_clinica === 0
    ) {
      return;
    }

    const doctorCreado = { ...doctor, id_clinica: +id_clinica, edad: +edad };

    await axios.post("/doctores", doctorCreado);

    setDoctor({
      codigo_doctor: "",
      nombre: "",
      edad: 0,
      id_clinica: 0,
    });
  };

  return (
    <div className="formulario-contenedor">
      <h2>Crear Doctor</h2>
      <form onSubmit={onSubmit} className="formulario">
        <label htmlFor="codigo_doctor">Codigo Doctor</label>
        <input
          type="text"
          name="codigo_doctor"
          id="codigo_doctor"
          autoComplete="off"
          value={codigo_doctor}
          onChange={onChange}
        />

        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          autoComplete="off"
          value={nombre}
          onChange={onChange}
        />

        <label htmlFor="edad">Edad</label>
        <input
          type="number"
          min="0"
          name="edad"
          id="edad"
          autoComplete="off"
          value={edad}
          onChange={onChange}
        />

        <select name="id_clinica" id="id_clinica" onChange={onChange}>
          <option disabled value="">
            --Seleccione--
          </option>
          {clinicas.length > 0 ? (
            clinicas.map(({ id_clinica, nombre }) => {
              return (
                <option key={id_clinica} value={id_clinica}>
                  {nombre}
                </option>
              );
            })
          ) : (
            <option>No hay clinicas disponibles</option>
          )}
        </select>

        <input type="submit" value="Crear Doctor" />
      </form>
    </div>
  );
};

export default CrearDoctor;
