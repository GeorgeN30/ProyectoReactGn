import { useEffect, useState } from "react";
import {
  obtenerAlumnos,
  eliminarAlumno,
  obtenerAlumnoPorId,
} from "../services/notaService";
import FormularioNota from "./FormularioNota";
import FormularioAlumno from "./FormularioAlumno";


const ListaAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [idConsulta, setIdConsulta] = useState("");
  const [resultadoConsulta, setResultadoConsulta] = useState(null);

  const cargarAlumnos = async () => {
    try {
      const response = await obtenerAlumnos();
      setAlumnos(response.data);
    } catch (error) {
      console.error("Error al obtener alumnos:", error);
    }
  };

  const eliminar = async (id) => {
    try {
      await eliminarAlumno(id);
      cargarAlumnos();
    } catch (error) {
      console.error("Error al eliminar alumno:", error);
    }
  };

  const consultarPorId = async () => {
    try {
      const res = await obtenerAlumnoPorId(idConsulta);
      setResultadoConsulta(res.data);
    } catch (error) {
      console.error("Alumno no encontrado");
      setResultadoConsulta(null);
    }
  };

  useEffect(() => {
    cargarAlumnos();
  }, []);

  return (
    <div className="container mt-4 lista-alumnos-dark">
      <h1 className="mb-4 text-center text-light">Gestión de Alumnos y Notas</h1>

      {/* Formulario para agregar alumno */}
      <div className="card bg-dark text-white mb-4">
        <div className="card-header border-secondary">Agregar Nuevo Alumno</div>
        <div className="card-body">
          <FormularioAlumno onAlumnoAgregado={cargarAlumnos} />
        </div>
      </div>

      {/* Formulario para consultar por ID */}
      <div className="card bg-dark text-white mb-4">
        <div className="card-header border-secondary">Consultar Alumno por ID</div>
        <div className="card-body">
          <div className="d-flex mb-2">
            <input
              type="text"
              className="form-control me-2"
              value={idConsulta}
              onChange={(e) => setIdConsulta(e.target.value)}
              placeholder="Ingrese ID del alumno"
            />
            <button className="btn btn-outline-light" onClick={consultarPorId}>
              Consultar
            </button>
          </div>
          {resultadoConsulta && (
            <div className="bg-secondary p-3 rounded text-white">
              <p><strong>Nombre:</strong> {resultadoConsulta.nombreA} {resultadoConsulta.apellidoA}</p>
              <p><strong>Edad:</strong> {resultadoConsulta.edadA}</p>
              <p><strong>Correo:</strong> {resultadoConsulta.correoA}</p>
            </div>
          )}
        </div>
      </div>

      {/* Lista de alumnos */}
      <h2 className="mb-3 text-light">Lista de Alumnos</h2>
      <ul className="list-group">
        {alumnos.map((alumno) => (
          <li key={alumno.idAlumno} className="list-group-item bg-secondary text-white mb-3 rounded">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{alumno.nombreA} {alumno.apellidoA}</h5>
                <p className="mb-1">Edad: {alumno.edadA} | Correo: {alumno.correoA}</p>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => eliminar(alumno.idAlumno)}>
                Eliminar
              </button>
            </div>

            {alumno.notas && alumno.notas.length > 0 && (
              <ul className="list-group mb-3 mt-2">
                {alumno.notas.map((nota) => (
                  <li key={nota.idN} className="list-group-item list-group-item-dark mb-2 rounded">
                    <strong>{nota.curso}:</strong> {nota.calificacion}
                  </li>
                ))}
              </ul>
            )}

            <FormularioNota idAlumno={alumno.idAlumno} onNotaGuardada={cargarAlumnos} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAlumnos;
