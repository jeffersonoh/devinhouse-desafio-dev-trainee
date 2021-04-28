package br.devin.devtrainee.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.devin.devtrainee.backend.model.Agendamento;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {

}
