package com.GOP.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.GOP.demo.models.Nota;

public interface NotaRepository extends JpaRepository<Nota, Integer>{
    
}
