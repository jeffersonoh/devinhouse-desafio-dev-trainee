package com.sistemadeagendamento.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemadeagendamento.model.Agendamento;

@Repository
public interface AgendamentoRepository extends JpaRepository<Agendamento, Integer>{

	
	
}
