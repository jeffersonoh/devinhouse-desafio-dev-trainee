package br.com.devinhouse.trainee.repositories;


import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.devinhouse.trainee.entities.Agendamento;

@Repository
public interface AgendamentoRepository extends JpaRepository<Agendamento, Integer>{
	Agendamento findByDataAgendamento(LocalDateTime data);
	
}
