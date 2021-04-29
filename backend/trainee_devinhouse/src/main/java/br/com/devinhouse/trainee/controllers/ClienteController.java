package br.com.devinhouse.trainee.controllers;

import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.devinhouse.trainee.entities.Cliente;
import br.com.devinhouse.trainee.services.ClienteServices;

@RestController
@RequestMapping(value = "/clientes/v1", headers = "api-version=1")
public class ClienteController {
	
	@Autowired
	private ClienteServices clienteServices;
	
	// Deverá haver um endpoint para criação de um cliente;
	@RequestMapping(value = "/cadastrar", method = POST, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE )
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente registerClient(@RequestBody Cliente obj) {
		return clienteServices.create(obj);
	}
	
	// Deverá haver um endpoint para listagem de todos os clientes cadastrados;
	@RequestMapping(value = "/consultar", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public List<Cliente> getAllClients() {
		return clienteServices.getAll();
	}
	
	// Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
	@RequestMapping(value = "/consultar/cpf/{cpf}", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Cliente getByCPF(@PathVariable String cpf) {
		return clienteServices.getByCPFKey(cpf);
	}
		
	// Deverá haver um endpoint para atualização de um cliente;
	@RequestMapping(value = "/atualizar/cpf/{cpf}", method = PUT, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)	
	public Cliente updateClient(@PathVariable String cpf, @RequestBody Cliente obj) {
		return clienteServices.updateClientByCPF(cpf, obj);
	}
		
	// Deverá haver um endpoint para exclusão de um cliente;
	@RequestMapping(value = "/deletar/cpf/{cpf}", method = DELETE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public List<Cliente> removeClient(@PathVariable String cpf) {
		return clienteServices.delete(cpf);
	}
}
