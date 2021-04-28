package br.devin.devtrainee.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.devin.devtrainee.backend.model.Exame;

public interface ExameRepository extends JpaRepository<Exame, Long> {

}
