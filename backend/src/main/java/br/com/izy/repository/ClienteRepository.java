package br.com.izy.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.izy.entity.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long> {
	Optional<Cliente> findByIdOrCpf(Long id, String cpf);
	
	Optional<Cliente> findByCpf(String cpf);
	
	Iterable<Cliente> findByNomeContainingIgnoreCaseOrCpfContainingIgnoreCase(String nome, String cpf);
}
