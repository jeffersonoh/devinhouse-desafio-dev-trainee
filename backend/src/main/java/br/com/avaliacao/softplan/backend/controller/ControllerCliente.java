package br.com.avaliacao.softplan.backend.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.avaliacao.softplan.backend.entity.Cliente;
import br.com.avaliacao.softplan.backend.service.ServiceCliente;

//TODO: Rever o esquema de versionamento e headers
//TODO: Rever o esquema do status code
@RestController
public class ControllerCliente {
	@Autowired
	private ServiceCliente service;

	// TODO: Deverá haver um endpoint para criação de um cliente;
	@PostMapping(path = "/cliente", consumes = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> cadastrarCliente(@RequestBody Cliente cliente) {
		return service.adicionarCliente(cliente);
	}

	// TODO: Deverá haver um endpoint para atualização de um cliente;
	// TODO: deverá atualizar tudo ou deverá atualizar apenas os campos
	// necessários?
	@PutMapping(path = "/cliente/{cpf}", consumes = APPLICATION_JSON_VALUE) //deixar esse produces?
	public ResponseEntity<?> atualizarCliente(@PathVariable String cpf, @RequestBody Cliente clienteAtualizado) {
		return service.atualizarCliente(cpf, clienteAtualizado);
	}

	// TODO: Deverá haver um endpoint para exclusão de um cliente;
	@DeleteMapping(path = "/cliente/{cpf}")
	public ResponseEntity<?> deletarCliente(@PathVariable String cpf) {
		return service.deletarCliente(cpf);
	}
	// TODO: Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
	@GetMapping(path = "/cliente/{cpf}", produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> buscarClientePorCpf(@PathVariable String cpf) {
		return service.buscarClientePorCpf(cpf);
	}
	
	// TODO: Deverá haver um endpoint para listagem de todos os clientes cadastrados;
	@GetMapping(path = "/clientes", produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> listarClientes() {
		return service.listarClientes();
	}
	
	@GetMapping(path="cliente-agendamento/{cpf}", produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> listarTodosAgendamentosCliente(@PathVariable String cpf) {
		return service.listarTodosAgendamentosCliente(cpf);
	}
}
