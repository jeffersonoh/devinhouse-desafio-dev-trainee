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
	
	public boolean clienteEstaCadastrado(Cliente cliente) {
		return repository.findByCpf(cliente.getCpf()).isPresent();
	}
	
	public boolean cpfEstaCadastrado(String cpf) {
		return repository.findByCpf(cpf).isPresent();
	}

	public ResponseEntity<?> adicionarCliente(Cliente cliente) {
		if (clienteEstaCadastrado(cliente)) {
			return new ResponseEntity<>("{\n   CPF j� cadastrado\n}", HttpStatus.BAD_REQUEST);
		}
		repository.save(cliente);
		return new ResponseEntity<>("{\n   Cliente cadastrado com sucesso\n}", HttpStatus.OK);
	}

	public ResponseEntity<?> atualizarCliente(String cpf, Cliente clienteAtualizado) {
		if (cpfEstaCadastrado(cpf)) {
			clienteAtualizado.setCpf(cpf);
			repository.save(clienteAtualizado);
			return new ResponseEntity<>("{\n   Cliente atualizado\n}", HttpStatus.OK);
		}
		return new ResponseEntity<>("{\n   CPF n�o encontrado, por favor, digite um CPF cadastrado\n}", HttpStatus.BAD_REQUEST);
	}

	public List<Cliente> listarClientes() {
		return repository.findAll();
	}
	
	public ResponseEntity<?> deletarCliente(String cpf) {
		if(cpfEstaCadastrado(cpf)) {
			repository.deleteByCpf(cpf);
			return new ResponseEntity<>("{\n   Cliente deletado com sucesso\n}", HttpStatus.OK);
		}
		return new ResponseEntity<>("{\n   CPF n�o encontrado, por favor, digite um CPF cadastrado\n}", HttpStatus.BAD_REQUEST);
	}
	
	public ResponseEntity<?> buscarClientePorCpf(String cpf) {
		if (cpfEstaCadastrado(cpf)) {
			return new ResponseEntity<>(repository.findByCpf(cpf), HttpStatus.OK);
		}
		return new ResponseEntity<>("{\n   CPF n�o encontrado, por favor, digite um CPF cadastrado\n}", HttpStatus.BAD_REQUEST);
	}
}
