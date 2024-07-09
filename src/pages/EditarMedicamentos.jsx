import Header from "../components/molecules/Header/Header";
import Form from "../components/organisms/loginForm/Form";

const EditarMedicamentos = ()=>{
    return(
        <>
        <Header/>
        <Form
            imgSrc="src/assets/ImageResources/prescripcion.png"
            imgAlt="Imagen de un medicamento"
            placeholders={["Nombre del medicamento", "Cantidad","Caducidad","Uso"]}
            buttonText="Editar"
        />
        </>
    );
}
export default EditarMedicamentos;