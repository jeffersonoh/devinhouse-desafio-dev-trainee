package br.com.softplan.desafiotreinee.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.desafiotreinee.dto.ClienteDTO;
import br.com.softplan.desafiotreinee.service.ClienteService;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteController {

	@Autowired
	private ClienteService service;

	// ->Deverá haver um endpoint para exclusão de um cliente;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/deletar/cpf/{cpf}", method = DELETE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(HttpStatus.ACCEPTED)
	public List<ClienteDTO> apagarCliente(@PathVariable String cpf) {
		return service.apagarCliente(cpf);
	}

	// ->Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/consulta/cpf/{cpf}", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(HttpStatus.OK)
	public List<ClienteDTO> recuperarClientesMocados(@PathVariable String cpf) {
		return service.recuperarClientesMocados(cpf);
	}

	// ->Deverá haver um endpoint para listagem de todos os clientes cadastrados;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/consulta", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(HttpStatus.OK)
	public List<ClienteDTO> recuperarClientesMocados() {
		return service.recuperarClientesMocados();
	}

	// ->Deverá haver um endpoint para criação de um cliente;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/cadastro/cliente", method = POST, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(HttpStatus.CREATED)
	public List<ClienteDTO> cadastrarCliente(@RequestBody ClienteDTO cliente) {
		return service.cadastrarCliente(cliente);
	}

	// ->Deverá haver um endpoint para atualização de um cliente;
	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/atualizar/cliente/{cpf}", method = PUT, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(HttpStatus.ACCEPTED)
	public List<ClienteDTO> atualizarCliente(@PathVariable String cpf, @RequestBody ClienteDTO newCliente) {

		return service.atualizarCliente(cpf, newCliente);
	}
}
