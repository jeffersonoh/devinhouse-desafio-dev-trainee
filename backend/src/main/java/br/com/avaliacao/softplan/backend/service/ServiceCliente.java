package br.com.avaliacao.softplan.backend.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.avaliacao.softplan.backend.entity.Cliente;
import br.com.avaliacao.softplan.backend.repository.RepositoryCliente;

@Service
@Transactional
public class ServiceCliente {

	@Autowired
	private RepositoryCliente repository;

	public ResponseEntity<?> adicionarCliente(Cliente cliente) {
		if (repository.findByCpf(cliente.getCpf()).isPresent()) {
			return new ResponseEntity<>("{\n   CPF já cadastrado\n}", HttpStatus.BAD_REQUEST);
		}
		repository.save(cliente);
		return new ResponseEntity<>("{\n   Cliente cadastrado com sucesso\n}", HttpStatus.OK);
	}

	public ResponseEntity<?> atualizarCliente(String cpf, Cliente clienteAtualizado) {
		if (repository.findByCpf(cpf).isPresent()) {
			clienteAtualizado.setCpf(cpf);
			repository.save(clienteAtualizado);
			return new ResponseEntity<>("{\n   Cliente atualizado\n}", HttpStatus.OK);
		}
		return new ResponseEntity<>("{\n   CPF não encontrado, por favor, digite um CPF cadastrado\n}", HttpStatus.BAD_REQUEST);
	}

	public List<Cliente> listarClientes() {
		return repository.findAll();
	}
	
	public ResponseEntity<?> deletarCliente(String cpf) {
		if(repository.findByCpf(cpf).isPresent()) {
			repository.deleteByCpf(cpf);
			return new ResponseEntity<>("{\n   Cliente deletado com sucesso\n}", HttpStatus.OK);
		}
		return new ResponseEntity<>("{\n   CPF não encontrado, por favor, digite um CPF cadastrado\n}", HttpStatus.BAD_REQUEST);
	}
	
	public ResponseEntity<?> buscarClientePorCpf(String cpf) {
		if (repository.findByCpf(cpf).isPresent()) {
			return new ResponseEntity<>(repository.findByCpf(cpf), HttpStatus.OK);
		}
		return new ResponseEntity<>("{\n   CPF não encontrado, por favor, digite um CPF cadastrado\n}", HttpStatus.BAD_REQUEST);
	}
}
