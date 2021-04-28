package br.com.devinhouse.spring.trabalhospringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.devinhouse.spring.trabalhospringboot.dto.ExamesDTO;

@Repository
public interface ExamesRepository extends JpaRepository<ExamesDTO, Integer> {
}
