import { useEffect, useState } from "react";
import { obtenerNotasPorAlumno, eliminarNota } from "../services/notaService";
import FormularioNota from "./FormularioNota";

function DetalleAlumno({ idAlumno }) {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    if (idAlumno) {
      cargarNotas();
    }
  }, [idAlumno]);

  const cargarNotas = () => {
    obtenerNotasPorAlumno(idAlumno)
      .then((res) => setNotas(res.data))
      .catch((err) => {
        console.error("Error cargando notas", err);
      });
  };

  const handleEliminarNota = (idNota) => {
    eliminarNota(idNota).then(() => cargarNotas());
  };

  return (
    <div>
      <h3>Notas del alumno</h3>
      <ul>
        {notas.map((nota) => (
          <li key={nota.id}>
            {nota.valor}
            <button onClick={() => handleEliminarNota(nota.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <FormularioNota idAlumno={idAlumno} onNotaGuardada={cargarNotas} />
    </div>
  );
}

export default DetalleAlumno;
