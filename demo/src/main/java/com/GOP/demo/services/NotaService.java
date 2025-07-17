package com.GOP.demo.services;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.GOP.demo.models.Alumno;
import com.GOP.demo.models.Nota;
import com.GOP.demo.repository.AlumnoRepository;
import com.GOP.demo.repository.NotaRepository;

@Service
public class NotaService {
    @Autowired
    private NotaRepository notaRepository;

    @Autowired 
    private AlumnoRepository alumnoRepository;


    public Nota guardarNota(Integer idAlumno, Nota nota){
        Optional<Alumno> alumnoOpt = alumnoRepository.findById(idAlumno);
        if (alumnoOpt.isPresent()) {
            nota.setAlumno(alumnoOpt.get());
            return notaRepository.save(nota);
        }else{
            throw new RuntimeException("Alumno no encontrado "+idAlumno);
        }
    }

    public List<Nota> obtenerNotasPorAlumno(Integer idAlumno){
        Optional<Alumno> alumOpt = alumnoRepository.findById(idAlumno);
        return alumOpt.map(Alumno::getNotas).orElseThrow(() -> new RuntimeException("Alumno no encontrado"));
    }
    
    public void EliminarNota(Integer idNota){
        notaRepository.deleteById(idNota);
    }

    
    
}
