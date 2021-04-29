package br.com.avaliacao.softplan.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.avaliacao.softplan.backend.entity.Agendamento;

@Repository
public interface RepositoryAgendamento extends JpaRepository<Agendamento, Long> {
	Optional<Agendamento> findByData(String data);
	Optional<Agendamento> findByHorario(String horario);

	@Query(value = "UPDATE agendamento SET data = :novaData, horario = :novoHorario WHERE id_agendamento = :idAgendamento", nativeQuery = true)
	@Modifying
	void atualizarAgendamento(@Param("novaData") String dataAtualizada, @Param("novoHorario") String HorarioAtualizado, 
			@Param("idAgendamento") Long id);
}
