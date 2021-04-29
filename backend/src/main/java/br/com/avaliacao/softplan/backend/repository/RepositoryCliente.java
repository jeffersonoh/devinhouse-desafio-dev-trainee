package br.com.avaliacao.softplan.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.avaliacao.softplan.backend.entity.Cliente;

@Repository
public interface RepositoryCliente extends JpaRepository<Cliente, Long>{
	//isto vem do jpa, que permite derivar metodos que leem, atualiza e deleta
	//a ideia disso � reduzir a quantidade de c�digo
	Optional<Cliente> findByCpf(String cpf);
	Optional<Cliente> deleteByCpf(String cpf);
}
