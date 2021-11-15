import { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from "../../axios";
import { Clinica } from "./ListaClinicas";
import ElementoLista from "./ElementoLista";

import "./DetallesClinica.css";

const DetallesClinica = () => {
  const [clinica, setClinica] = useState<Clinica>();
  const params = useParams();

  const detalleClinica = async () => {
    const clinicaFiltrada: Clinica = (await axios.get(`/clinicas/${params.id}`))
      .data.clinica;

    if (!clinicaFiltrada) {
      <p>Loading</p>;
    }

    setClinica(clinicaFiltrada);
  };

  useEffect(() => {
    detalleClinica();
  }, []);

  return (
    <div className="detalle-clinica">
      {clinica ? <ElementoLista {...clinica} /> : <h3>Cargando...</h3>}
    </div>
  );
};

export default DetallesClinica;
