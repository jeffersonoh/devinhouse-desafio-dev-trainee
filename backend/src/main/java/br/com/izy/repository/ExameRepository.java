package br.com.izy.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.izy.entity.Exame;

@Repository
public interface ExameRepository extends CrudRepository<Exame, Long> {

}
