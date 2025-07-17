package com.GOP.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.GOP.demo.models.Alumno;

public interface AlumnoRepository extends JpaRepository<Alumno, Integer>{
    
}
