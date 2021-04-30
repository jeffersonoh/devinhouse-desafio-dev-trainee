package br.com.avaliacao.softplan.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.avaliacao.softplan.backend.entity.Exame;

@Repository
public interface RepositoryExame extends JpaRepository<Exame, Long>{
	Optional<Exame> findByNome(String nome);
	Optional<Exame> deleteByNome(String nome);
	
	@Query(value = "UPDATE exame SET nome = :nomeAtualizado WHERE nome = :nomeAntigo", nativeQuery = true)
	@Modifying
	void atualizarExame(@Param("nomeAtualizado") String novoNome, @Param("nomeAntigo") String nomeAntigo);

}
