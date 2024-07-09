import Header from "../components/molecules/Header/Header";
import Form from "../components/organisms/loginForm/Form";

const EditarCitas =()=>{
    return(
        <>
        <Header/>
        <Form
            imgSrc="src/assets/ImageResources/cita.png"
            imgAlt="Imagen de un usuario"
            placeholders={["Nombre del paciente", "Fecha","Hora"]}
            buttonText="Editar"
        />
        </>

    );
}
export default EditarCitas; 