package br.com.softplan.desafio.devtrainee.repository;

import br.com.softplan.desafio.devtrainee.entity.Exame;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface ExameRepository
        extends JpaRepository<Exame, Long> {

	Optional<Exame> findExameByNomeDoExame(String nomeDoExame);
}
