package br.com.devinhouse.trainee.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.devinhouse.trainee.entities.Exame;

@Repository
public interface ExameRepository extends JpaRepository<Exame, Integer> {

}
