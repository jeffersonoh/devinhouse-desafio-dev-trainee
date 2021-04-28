package br.com.devinhouse.spring.trabalhospringboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.devinhouse.spring.trabalhospringboot.dto.ClienteDTO;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteDTO, Integer> {
    
    List<ClienteDTO> findByCpfContains(String cpf);
}
