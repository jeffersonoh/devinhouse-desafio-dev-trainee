package br.com.devinhouse.spring.trabalhospringboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.devinhouse.spring.trabalhospringboot.dto.AgendaDTO;

@Repository
public interface AgendaRepository extends JpaRepository<AgendaDTO,Integer> {
    
}
