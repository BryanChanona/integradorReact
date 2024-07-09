import React from 'react';
import { Link } from 'react-router-dom';
import '../../Hoja-estilos/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/Agendar cita" className='nav-link'>Agendar Cita</Link>
        <Link to="/verCitas" className='nav-link'>Ver Citas</Link>
        <Link to="/AgregarMedicamento" className='nav-link'>Agregar Medicamentos</Link>
        <Link to="/verMedicamentos" className='nav-link'>Ver medicamentos</Link>
      </div>
    </nav>
  );
}

export default Nav;
