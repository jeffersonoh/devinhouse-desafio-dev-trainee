package br.devin.devtrainee.backend.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.devin.devtrainee.backend.model.Cliente;
import br.devin.devtrainee.backend.service.ClienteService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ClienteController {
	
	@Autowired
	private ClienteService service;
	
	@PostMapping(path="/v1/cliente", consumes="application/json", produces="application/json")
	public ResponseEntity<?> cadastraCliente(@Validated @RequestBody Cliente cliente) {
		return this.service.cadastrarCliente(cliente);
	}
	
	@GetMapping(path="/v1/clientes", produces="application/json")
	public List<Cliente> buscaTodosClientes() {
		return this.service.buscarTodosClientes();		
	}
	
	@GetMapping(path="/v1/cliente", produces="application/json")
	public Cliente buscaCliente(@RequestParam String cpf) {
		return this.service.buscarClientePorCPF(cpf);
	}
	
	@PutMapping(path="/v1/cliente", consumes="application/json")
	public ResponseEntity<?> atualizaCliente(@RequestParam Long id, @Validated @RequestBody Cliente novo) {
		return this.service.atualizarCliente(id, novo);
	}
	
	@DeleteMapping(path="/v1/cliente")
	public ResponseEntity<?> deletaCliente(@RequestParam Long id) {
		return this.service.deletarCliente(id);
	}

}
