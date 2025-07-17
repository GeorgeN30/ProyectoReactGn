package com.GOP.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.GOP.demo.models.Nota;
import com.GOP.demo.services.NotaService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class NotaController {
    @Autowired
    private NotaService notaService;

    @PostMapping("/alumnos/{idAlumno}/notas")
    public ResponseEntity<Nota> guardarNota(@PathVariable Integer idAlumno, @RequestBody Nota nota){
        Nota nuevaNota = notaService.guardarNota(idAlumno, nota);
        return ResponseEntity.ok(nuevaNota);
    }

    @GetMapping("/alumnos/{idAlumno}/notas")
    public ResponseEntity<List<Nota>> obtenerNotasPorAlumno(@PathVariable Integer idAlumno){
        List<Nota> notas= notaService.obtenerNotasPorAlumno(idAlumno);
        return ResponseEntity.ok(notas);
    }

    @DeleteMapping("/notas/{idNota}")
    public ResponseEntity<Void> eliminarNota(@PathVariable Integer idNota){
        notaService.EliminarNota(idNota);
        return ResponseEntity.noContent().build();
    }
}
