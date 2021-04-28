package br.com.avaliacao.softplan.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.avaliacao.softplan.backend.entity.Cliente;

public interface RepositoryCliente extends JpaRepository<Cliente, String>{
	//isto vem do jpa, que permite derivar metodos que leem, atualiza e deleta
	//a ideia disso é reduzir a quantidade de código
	Optional<Cliente> findByCpf(String cpf);
	Optional<Cliente> deleteByCpf(String cpf);
}
