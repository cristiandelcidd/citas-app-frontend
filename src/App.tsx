import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ListaClinicas from "./components/Clinica/ListaClinicas";
import CrearClinica from "./components/Clinica/CrearClinica";
import CrearDoctor from "./components/Doctor/CrearDoctor";
import CrearCita from "./components/Citas/CrearCita";

import "./App.css";
import DetallesClinica from "./components/Clinica/DetallesClinica";
import ActualizarClinica from "./components/Clinica/ActualizarClinica";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <h1>Citas App</h1>

        <Routes>
          <Route path="/crear-clinica" element={<CrearClinica />} />
          <Route path="/crear-doctor" element={<CrearDoctor />} />
          <Route path="/" element={<ListaClinicas />} />
          <Route path="/crear-cita" element={<CrearCita />} />
          <Route path="/:id" element={<DetallesClinica />} />
          <Route
            path="/actualizar-clinica/:id"
            element={<ActualizarClinica />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
