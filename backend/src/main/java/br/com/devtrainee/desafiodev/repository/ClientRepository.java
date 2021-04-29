package br.com.devtrainee.desafiodev.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devtrainee.desafiodev.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long>{
  
  Optional<Client> findBycpf(String cpf);
  
}
