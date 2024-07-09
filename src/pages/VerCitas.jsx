import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/molecules/Header/Header';
import Table from '../components/organisms/Table/Table';
import '../components/Hoja-estilos/EditarCitas.css';

const VerCitas = () => {
    const navigate = useNavigate();
    
    const imgSrc1 = "src/assets/ImageResources/MedicaNatura(Logo1).png";

    const columns = [
        { header: 'Paciente', field: 'Paciente' },
        { header: 'Fecha', field: 'Fecha' }
    ];

    const [data, setData] = useState([
        { Paciente: 'John Doe', Fecha: '2023-07-01' },
        { Paciente: 'Jane Smith', Fecha: '2023-07-02' },
        { Paciente: 'Bob Johnson', Fecha: '2023-07-03' },
        { Paciente: 'Alice Brown', Fecha: '2023-07-04' }
    ]);

    const handleEdit = (index) => {
        navigate("/editarCita");
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm("¿Realmente quieres eliminar esta cita?");
        if (confirmDelete) {
            const newData = data.filter((_, i) => i !== index);
            setData(newData);
        }
    };

    return (
        <>
        <Header imgSrc1={imgSrc1}  />
        <div className="editarCitasContainer">
          
            <Table columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
        </>
    );
}

export default VerCitas;
