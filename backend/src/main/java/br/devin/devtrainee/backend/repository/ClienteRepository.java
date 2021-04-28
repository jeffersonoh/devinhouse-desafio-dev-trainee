package br.devin.devtrainee.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import br.devin.devtrainee.backend.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{
	
	Optional<Cliente> findBycPF(String cPF);
	
}
