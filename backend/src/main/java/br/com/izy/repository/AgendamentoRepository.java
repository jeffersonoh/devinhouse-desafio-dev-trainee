package br.com.izy.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.izy.entity.Agendamento;

@Repository
public interface AgendamentoRepository extends CrudRepository<Agendamento, Long> {
	Iterable<Agendamento> findByClienteIdOrExameId(Long clienteId, Long ExameId);
	Iterable<Agendamento> findByClienteIdAndExameId(Long clienteId, Long ExameId);
	Optional<Agendamento> findByDataAndHorario(LocalDate data, LocalTime horario);
	Iterable<Agendamento> findByData(LocalDate data);
	Iterable<Agendamento> findByDataBetween(LocalDate dataInicial, LocalDate dataFinal);
}
