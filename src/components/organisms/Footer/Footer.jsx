import '../../Hoja-estilos/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Acerca de Nosotros</h2>
          <p>
            Somos una empresa dedicada a proporcionar los mejores servicios de salud. Nuestro objetivo es mejorar la calidad de vida de nuestros pacientes a través de un cuidado excepcional.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Enlaces Rápidos</h2>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#ayuda">Ayuda</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contáctanos</h2>
          <p>Email: contacto@empresa.com</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Empresa de Salud | Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer;
