package com.GOP.demo.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Alumnos")
public class Alumno {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAlumno;
    private String nombreA;
    private String apellidoA;
    private Integer edadA;
    private String correoA;

    @OneToMany(mappedBy = "alumno", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Nota> notas = new ArrayList<>();
    
    public Integer getIdAlumno() {
        return idAlumno;
    }
    public void setIdAlumno(Integer idAlumno) {
        this.idAlumno = idAlumno;
    }
    public String getNombreA() {
        return nombreA;
    }
    public void setNombreA(String nombreA) {
        this.nombreA = nombreA;
    }
    public String getApellidoA() {
        return apellidoA;
    }
    public void setApellidoA(String apellidoA) {
        this.apellidoA = apellidoA;
    }
    public Integer getEdadA() {
        return edadA;
    }
    public void setEdadA(Integer edadA) {
        this.edadA = edadA;
    }
    public String getCorreoA() {
        return correoA;
    }
    public void setCorreoA(String correoA) {
        this.correoA = correoA;
    }
    public List<Nota> getNotas() {
        return notas;
    }
    public void setNotas(List<Nota> notas) {
        this.notas = notas;
    }

}
