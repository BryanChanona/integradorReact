import React from 'react';
import Form from "../components/organisms/loginForm/Form.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/Home secretaria");
    };

    return (
        <Form
            imgSrc="src/assets/ImageResources/contacto.png"
            imgAlt="Imagen de un usuario"
            placeholders={["Gmail", "Contraseña"]}
            buttonText="INICIAR SESIÓN"
            handleClick={handleLogin}
            parrafoText="¿No tiene cuenta?"
            linkHref="/registro"
            linkText="Registrarse"
        />
    );
}

export default Login;
