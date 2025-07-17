// FormularioNota.jsx
import { useState } from "react";
import { guardarNota } from "../services/notaService";

function FormularioNota({ idAlumno, onNotaGuardada }) {
  const [curso, setCurso] = useState("");
  const [notas, setNotas] = useState({ n1: "", n2: "", n3: "" });

  const handleChange = (e) => {
    setNotas({ ...notas, [e.target.name]: e.target.value });
  };

  const calcularPromedio = () => {
    const total = Number(notas.n1) + Number(notas.n2) + Number(notas.n3);
    return Math.round(total / 3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaNota = {
      curso,
      calificacion: calcularPromedio()
    };
    guardarNota(idAlumno, nuevaNota).then(() => {
      onNotaGuardada();
      setCurso("");
      setNotas({ n1: "", n2: "", n3: "" });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={curso} onChange={(e) => setCurso(e.target.value)} placeholder="Curso" />
      <input name="n1" type="number" value={notas.n1} onChange={handleChange} placeholder="Nota 1" />
      <input name="n2" type="number" value={notas.n2} onChange={handleChange} placeholder="Nota 2" />
      <input name="n3" type="number" value={notas.n3} onChange={handleChange} placeholder="Nota 3" />
      <button type="submit">Guardar Nota</button>
    </form>
  );
}

export default FormularioNota;
