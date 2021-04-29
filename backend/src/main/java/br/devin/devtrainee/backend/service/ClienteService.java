package br.devin.devtrainee.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.devin.devtrainee.backend.model.Cliente;
import br.devin.devtrainee.backend.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRep;
	
	public Cliente adicionaCliente(Cliente cliente) {
		return this.clienteRep.save(cliente);
	}
	
	public List<Cliente> procuraTodosClientes() {
		return this.clienteRep.findAll();
	}
	
	public Cliente procuraPorID(Long id) {
		return this.clienteRep.findById(id)
				.orElseThrow(
				() -> new ResponseStatusException(
						HttpStatus.BAD_REQUEST, 
						"Não foi encontrado clientes com o ID: "+ id+". \nInforme um novo ID.")
				);
	}
	
	public Cliente procuraPorCPF(String cPF) {
		return this.clienteRep.findBycPF(cPF)
				.orElseThrow(
				() -> new ResponseStatusException(
						HttpStatus.BAD_REQUEST, 
						"Não foi encontrado clientes com o CPF: "+ cPF +" \nInforme um novo CPF.")
				);
	}
	
	public ResponseEntity<?> atualizaCliente(Long id, Cliente novoCliente) {
		if(this.clienteRep.existsById(id)) {
			novoCliente.setIdCliente(id);
			this.clienteRep.save(novoCliente);
			return  ResponseEntity.noContent()
					.build();
		}
		return  ResponseEntity.badRequest()
				.build();
	}
	
	public ResponseEntity<?> deletaCliente(Long id) {
		if(this.clienteRep.existsById(id)) {
			this.clienteRep.deleteById(id);
			return  ResponseEntity.noContent()
					.build();
		}
		return  ResponseEntity.badRequest()
				.build();
	}
	
}
