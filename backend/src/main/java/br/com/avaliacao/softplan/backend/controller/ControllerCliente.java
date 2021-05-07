package br.com.avaliacao.softplan.backend.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.avaliacao.softplan.backend.entity.Cliente;
import br.com.avaliacao.softplan.backend.service.ServiceCliente;

@RestController
public class ControllerCliente {
	@Autowired
	private ServiceCliente service;

	@PostMapping(path = "/cliente", consumes = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> cadastrarCliente(@RequestBody Cliente cliente) {
		return service.adicionarCliente(cliente);
	}

	@PutMapping(path = "/cliente/{cpf}", consumes = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> atualizarCliente(@PathVariable String cpf, @RequestBody Cliente clienteAtualizado) {
		return service.atualizarCliente(cpf, clienteAtualizado);
	}

	@DeleteMapping(path = "/cliente/{cpf}")
	public ResponseEntity<?> deletarCliente(@PathVariable String cpf) {
		return service.deletarCliente(cpf);
	}

	@GetMapping(path = "/cliente/{cpf}", produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> buscarClientePorCpf(@PathVariable String cpf) {
		return service.buscarClientePorCpf(cpf);
	}
	
	@GetMapping(path = "/clientes", produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> listarClientes() {
		return service.listarClientes();
	}
	
	@GetMapping(path="cliente-agendamento/{cpf}", produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> listarTodosAgendamentosCliente(@PathVariable String cpf) {
		return service.listarTodosAgendamentosCliente(cpf);
	}
}