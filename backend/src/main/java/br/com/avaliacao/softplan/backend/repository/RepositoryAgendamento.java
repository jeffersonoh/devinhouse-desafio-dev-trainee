package br.com.avaliacao.softplan.backend.repository;

import java.util.List;
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
	
	@Query(value = "select horario from agendamento a " +
			 "left join exame e on e.id_exame = a.id_exame " +
			 "where e.nome = :nomeExame and a.data = :dataPesquisa", nativeQuery = true)
	@Modifying
	List<String> horariosDisponiveis(@Param("nomeExame") String nomeExame, @Param("dataPesquisa") String data);
}

/*
 * Select horario from agendamento a Left join exame e on e.id_exame =
 * a.id_agendamento Where a.data = "29/04/2021"
 */
