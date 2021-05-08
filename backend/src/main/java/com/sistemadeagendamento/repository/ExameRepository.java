package com.sistemadeagendamento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemadeagendamento.model.Exame;

@Repository
public interface ExameRepository extends JpaRepository<Exame, Integer>{

}
