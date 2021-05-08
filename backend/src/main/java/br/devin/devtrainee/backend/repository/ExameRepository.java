package br.devin.devtrainee.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.devin.devtrainee.backend.model.Exame;

@Repository
public interface ExameRepository extends JpaRepository<Exame, Long> {

}
