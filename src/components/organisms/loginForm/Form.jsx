import React from 'react';
import Img from "../../atoms/Img/Img.jsx";
import Input from "../../atoms/Input/Input.jsx";
import Button from "../../atoms/Button/Button.jsx";
import '../../Hoja-estilos/Form.css';
import Parrafo from "../../atoms/Parrafo/Parrafo.jsx";
import ElementA from '../../atoms/ElementA/ElementA.jsx'

const Form = ({ imgSrc, imgAlt, placeholders, buttonText, handleClick, parrafoText, linkHref, linkText }) => {
    return (
        <div className="loginPage">
            <div className="contentForm">
                <div className="form">
                    <div className="user">
                        <Img src={imgSrc} alt={imgAlt} />
                    </div>
                    {placeholders.map((placeholder, index) => (
                        <Input key={index} placeholder={placeholder} />
                    ))}
                    <Button className="login" text={buttonText} onClick={handleClick} />
                    <div className="contenidoRegistro">
                        <Parrafo className="parrafo" parr={parrafoText} />
                        <ElementA className="textoRegistro" href={linkHref} text={linkText} />
                    </div>
                </div>
                <div className="imgLogo">
                    <Img src="src/assets/ImageResources/MedicaNatura(Logo).png" alt="Logo de la empresa" className="imagenLogo" />
                </div>
                <div className="circle"></div>
            </div>
        </div>
    );
}

export default Form;
