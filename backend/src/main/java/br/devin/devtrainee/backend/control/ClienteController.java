package br.devin.devtrainee.backend.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.devin.devtrainee.backend.model.Cliente;
import br.devin.devtrainee.backend.service.ClienteService;


@RestController
public class ClienteController {
	
	@Autowired
	private ClienteService service;
	
	@PostMapping(headers="api-version=2021-04-28", path="/v1/cliente"
			, consumes="application/json", produces="application/json")
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente addCliente(@Validated @RequestBody Cliente cliente) {
		return this.service.adicionaCliente(cliente);
	}
	
	@GetMapping(headers="api-version=2021-04-28", path="/v1/cliente", produces="application/json")
	public List<Cliente> getAllClientes() {
		return this.service.procuraTodosClientes();		
	}
	
	@GetMapping(headers="api-version=2021-04-28", path="/v1/cliente", produces="application/json")
	public Cliente getCliente(String cpf) {
		return this.service.procuraPorCPF(cpf);
	}
	
	@PutMapping(headers="api-version=2021-04-28", path="/v1/cliente")
	public ResponseEntity<?> putCliente(Long id, Cliente novo) {
		return this.service.atualizaCliente(id, novo);
	}
	
	@DeleteMapping(headers="api-version=2021-04-28", path="/v1/cliente")
	public ResponseEntity<?> deleteCliente(Long id) {
		return this.service.deletaCliente(id);
	}

}
