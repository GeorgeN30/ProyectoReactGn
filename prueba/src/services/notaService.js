import axios from "axios";
const API_URL = "http://localhost:8082/api";

export const obtenerAlumnos = () => axios.get(`${API_URL}/alumnos`);
export const obtenerAlumnoPorId = (id) => axios.get(`${API_URL}/alumnos/${id}`);
export const guardarAlumno = (alumno) => axios.post(`${API_URL}/alumnos`, alumno);
export const eliminarAlumno = (id) => axios.delete(`${API_URL}/alumnos/${id}`);

export const obtenerNotasPorAlumno = (idAlumno) => axios.get(`${API_URL}/alumnos/${idAlumno}/notas`);

export const guardarNota = (idAlumno, nota) => axios.post(`${API_URL}/alumnos/${idAlumno}/notas`, nota);

export const eliminarNota = (idNota) => axios.delete(`${API_URL}/notas/${idNota}`);