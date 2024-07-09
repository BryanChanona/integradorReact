import React, { useState } from 'react';
import '../components/Hoja-estilos/Home.css';
import Footer from "../components/organisms/Footer/Footer";
import H1 from "../components/atoms/H1/H1";
import NavBar from '../components/molecules/NavBar/NavBar';
import medica from '../assets/ImageResources/MedicaNatura(Logo).png';

const Home = () => {
    const [popupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

    return (
        <>
            <NavBar imagen={medica} onImageClick={togglePopup} />
            <div className="contentHome">
                <div className={`userPopup ${popupVisible ? 'active' : ''}`}>
                    <p><a href="/login">Iniciar sesión</a></p>
                    <p><a href="/registro">Registrarse</a></p>
                </div>
                <div className="contentTitulo">
                    <H1 className="titulo"
                        titulo="Medica natura cuenta con la mayoría de medicamentos naturales, cuenta con un extenso y surtido Inventario."
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
