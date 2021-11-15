import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Clinicas</Link>
        </li>
        <li>
          <Link to="/crear-clinica">Crear Clinica</Link>
        </li>
        <li>
          <Link to="/crear-doctor">Crear Doctor</Link>
        </li>
        <li>
          <Link to="/crear-cita">Crear Cita</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
