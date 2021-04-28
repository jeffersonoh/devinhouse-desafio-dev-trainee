package br.com.avaliacao.softplan.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.avaliacao.softplan.backend.entity.Exame;

@Repository
public interface RepositoryExame extends JpaRepository<Exame, Long>{
	Optional<Exame> findByNome(String nome);
	Optional<Exame> deleteByNome(String nome);
}
