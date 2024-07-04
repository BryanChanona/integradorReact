import React from 'react';
import { Link } from 'react-router-dom';
import '../../Hoja-estilos/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/Agendar cita" className='nav-link'>Agendar Cita</Link>
        <Link to="/cancelar-cita" className='nav-link'>Cancelar Cita</Link>
        <Link to="/editar-cita" className='nav-link'>Editar Cita</Link>
        <Link to="/agregar-medicamentos" className='nav-link'>Agregar Medicamentos</Link>
        <Link to="/eliminar-medicamentos" className='nav-link'>Eliminar Medicamentos</Link>
        <Link to="/editar-medicamentos" className='nav-link'>Editar Medicamentos</Link>
      </div>
    </nav>
  );
}

export default Nav;
