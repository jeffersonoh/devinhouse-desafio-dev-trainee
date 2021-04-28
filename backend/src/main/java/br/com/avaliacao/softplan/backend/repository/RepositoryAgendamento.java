package br.com.avaliacao.softplan.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.avaliacao.softplan.backend.entity.Agendamento;

@Repository
public interface RepositoryAgendamento extends JpaRepository<Agendamento, Long> {
	Optional<Agendamento> findByData(String data);
	Optional<Agendamento> findByHorario(String horario);
}
