package br.com.izy.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.izy.entity.Agendamento;

@Repository
public interface AgendamentoRepository extends CrudRepository<Agendamento, Long> {
	Optional<Agendamento> findByClienteId(Long clienteId);
	Optional<Agendamento> findByExameId(Long exameId);
	Optional<Agendamento> findByDataAndHorario(LocalDate data, LocalTime horario);
}
