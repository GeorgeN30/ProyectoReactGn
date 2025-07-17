package com.GOP.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.GOP.demo.models.Alumno;
import com.GOP.demo.services.AlumnoService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/alumnos")
@CrossOrigin(origins = "https:localhost:3000")
public class AlumnoController {
    @Autowired
    private AlumnoService alumnoService;

    @PostMapping
    public ResponseEntity<Alumno> guardarAlumno(@RequestBody Alumno alumno) {
        alumnoService.guardarAlumno(alumno);
        return ResponseEntity.ok(alumno);
    }

    @GetMapping
    public ResponseEntity<List<Alumno>> obtenerAlumnos(){
        return ResponseEntity.ok(alumnoService.obtenerAlumnos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Alumno> obtenerAlumnoPorId(@PathVariable Integer id){
        Optional<Alumno> alumnoOpt = alumnoService.obtenerAlumnosPorId(id);
        return alumnoOpt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    } 

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarAlumnno(@PathVariable Integer id){
        alumnoService.eliminarAlumnno(id);
        return ResponseEntity.noContent().build();
    }
    
}
