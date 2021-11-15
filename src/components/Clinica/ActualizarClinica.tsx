import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import axios from "../../axios";
import Formulario from "../Form/Formulario";
import { Clinica } from "./ListaClinicas";

const ActualizarClinica = () => {
  const params = useParams();
  const [clinica, setClinica] = useState<Clinica>({
    id_clinica: 0,
    nombre: "",
    direccion: "",
    imagen: "",
  });

  const { nombre, direccion, imagen } = clinica;

  console.log(clinica);

  const obtenerClinica = async () => {
    const clinicaFiltada: Clinica = (await axios.get(`/clinicas/${params.id}`))
      .data.clinica;
    setClinica(clinicaFiltada);
  };

  useEffect(() => {
    obtenerClinica();
  }, []);

  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setClinica({
      ...clinica,
      [name]: value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nombre?.trim().length === 0 ||
      direccion?.trim().length === 0 ||
      imagen?.trim().length === 0
    ) {
      return;
    }

    await axios.patch(`/clinicas/${params.id}`, clinica);

    setClinica({
      id_clinica: 0,
      nombre: "",
      direccion: "",
      imagen: "",
    });

    navigate("/");
  };

  return (
    <>
      <Formulario
        onChange={onChange}
        onSubmit={onSubmit}
        estado="Actualizar"
        clinica={clinica}
      />
    </>
  );
};

export default ActualizarClinica;
