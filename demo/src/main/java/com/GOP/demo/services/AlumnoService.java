package com.GOP.demo.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.GOP.demo.models.Alumno;
import com.GOP.demo.repository.AlumnoRepository;

@Service
public class AlumnoService {
    @Autowired 
    AlumnoRepository alumnoRepository;

    public void guardarAlumno(Alumno alumno){
        alumnoRepository.save(alumno);
    }

    public List<Alumno> obtenerAlumnos(){
        return alumnoRepository.findAll();
    }

    public Optional<Alumno> obtenerAlumnosPorId(Integer idAlumno){
        Optional <Alumno> alumnoPorId = alumnoRepository.findById(idAlumno);
        return alumnoPorId;
    }

    public void eliminarAlumnno(Integer IdAlumno){
        alumnoRepository.deleteById(IdAlumno);
    }
}
