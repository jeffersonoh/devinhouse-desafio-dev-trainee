package com.sistemadeagendamento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.sistemadeagendamento.exception.ClienteException;
import com.sistemadeagendamento.model.Cliente;
import com.sistemadeagendamento.repository.ClientesRepository;
import com.sistemadeagendamento.service.ClienteService;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/cliente")
public class ClienteController {

	@Autowired
	private ClientesRepository clientesRepository;
	
	@Autowired
	private ClienteService clienteService;
	
	
	@GetMapping()
	public List<Cliente> listarClientes(){
		return clientesRepository.findAll();	}
	
	
	@PostMapping()
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente adicionar(@RequestBody Cliente cliente) {
		Cliente clienteCriado = clienteService.criarCliente(cliente);
		if (clienteCriado == null) {
			throw new ResponseStatusException(
					HttpStatus.CONFLICT, "CPF já cadastrado!");
		}
		return clienteCriado;
	}
	
	@GetMapping(path = "/{cpf}")
	public Optional<Cliente> listarPeloCpf(@PathVariable (value = "cpf") String cpf){
		return clientesRepository.findByCpf(cpf);
	}
	
	@PatchMapping(path = "/{cpf}")
	public Cliente editarCliente(@PathVariable (value = "cpf") String cpf, @RequestBody Cliente cliente) {
		try{
			clienteService.editarCliente(cpf, cliente);
		}
		catch(ClienteException e){
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND, e.getMessage());
		}
		return cliente;
	}
	@DeleteMapping(path = "/{cpf}")
	public void deletarCliente(@PathVariable (value = "cpf") String cpf){
		try {
			clienteService.deletarCliente(cpf);
		}
		catch (ClienteException e) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND, e.getMessage());
		}
	}
}
