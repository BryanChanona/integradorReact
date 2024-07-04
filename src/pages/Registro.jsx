import Form from "../components/organisms/loginForm/Form";
import { useNavigate } from "react-router-dom";
const Registro =()=>{

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/registro");
    };
    return(
        <Form
            imgSrc="src/assets/ImageResources/contacto.png"
            imgAlt="Imagen de un usuario"
            placeholders={["Gmail", "Contraseña","Confirmar contraseña"]}
            buttonText="REGISTRAR"
            handleClick={handleLogin}
        />

    );
}
export default Registro;