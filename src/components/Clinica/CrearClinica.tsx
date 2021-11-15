import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../../axios";
import Formulario from "../Form/Formulario";

export interface CamposClinica {
  nombre: string;
  direccion: string;
  imagen: string;
}

const CrearClinica = () => {
  const [camposClinica, setCamposClinica] = useState<CamposClinica>({
    nombre: "",
    direccion: "",
    imagen: "",
  });

  const navigate = useNavigate();

  const { nombre, direccion, imagen } = camposClinica;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCamposClinica({
      ...camposClinica,
      [name]: value,
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nombre.trim().length === 0 ||
      direccion.trim().length === 0 ||
      imagen.trim().length === 0
    ) {
      return;
    }

    await axios.post("/clinicas", camposClinica);

    setCamposClinica({
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
        estado="Crear"
        clinica={camposClinica}
      />
    </>
  );
};

export default CrearClinica;
