import React, { useState } from 'react';
import { guardarAlumno } from '../services/notaService';

const FormularioAlumno = ({ onAlumnoAgregado }) => {
  const [alumno, setAlumno] = useState({
    nombreA: '',
    apellidoA: '',
    edadA: '',
    correoA: '',
  });

  const handleChange = (e) => {
    setAlumno({ ...alumno, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await guardarAlumno(alumno);
      onAlumnoAgregado(); // para recargar la lista
      setAlumno({ nombreA: '', apellidoA: '', edadA: '', correoA: '' });
    } catch (error) {
      console.error('Error al guardar el alumno:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombreA" placeholder="Nombre" value={alumno.nombreA} onChange={handleChange} />
      <input name="apellidoA" placeholder="Apellido" value={alumno.apellidoA} onChange={handleChange} />
      <input name="edadA" type="number" placeholder="Edad" value={alumno.edadA} onChange={handleChange} />
      <input name="correoA" type="email" placeholder="Correo" value={alumno.correoA} onChange={handleChange} />
      <button type="submit">Agregar Alumno</button>
    </form>
  );
};

export default FormularioAlumno;
