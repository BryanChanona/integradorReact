import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/molecules/Header/Header';
import Table from '../components/organisms/Table/Table';
import '../components/Hoja-estilos/EditarMedicamentos.css';

const VerMedicamentos = () => {
    const navigate = useNavigate();
    
    const imgSrc1 = "src/assets/ImageResources/MedicaNatura(Logo1).png";

    const columns = [
        { header: 'Producto', field: 'Producto' },
        { header: 'Cantidad', field: 'Cantidad' },
        { header: 'Caducidad', field: 'Caducidad' },
        { header: 'Uso', field: 'Uso' }
    ];

    const [data, setData] = useState([
        { Producto: 'Ibuprofeno', Cantidad: '20', Caducidad: '2023-12-01', Uso: 'Dolor y fiebre' },
        { Producto: 'Paracetamol', Cantidad: '15', Caducidad: '2024-01-15', Uso: 'Fiebre' },
        { Producto: 'Amoxicilina', Cantidad: '30', Caducidad: '2023-11-20', Uso: 'Infecciones bacterianas' },
        { Producto: 'Aspirina', Cantidad: '25', Caducidad: '2024-03-10', Uso: 'Dolor y antiinflamatorio' }
    ]);

    const handleEdit = (index) => {
        navigate("/editarMedicamentos");
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("¿Realmente quieres eliminar este medicamento?");
        if (confirmDelete) {
            const newData = data.filter((_, i) => i !== index);
            setData(newData);
        }
    };

    return (
        <>
        <Header imgSrc1={imgSrc1} />
        <div className="editarMedicamentosContainer">
            <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
        </>
    );
}

export default VerMedicamentos;
