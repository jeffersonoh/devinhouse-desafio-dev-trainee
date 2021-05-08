package br.com.devtrainee.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.devtrainee.springboot.dto.ClienteDTO;
import br.com.devtrainee.springboot.service.ClienteService;

@RestController
@RequestMapping(value ="/v1/cliente")
public class ClienteController {

	@Autowired
	public ClienteService clienteService;
	
	@RequestMapping(value = "" , method = RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<ClienteDTO> ListarClientes() {
		return clienteService.listar();
	}
	
	@RequestMapping(value="/{cpf}", method=RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ClienteDTO pegarPorCpf(@PathVariable String cpf) {
		return clienteService.pegaPorCpf(cpf);
	}
	
	@RequestMapping(value="", method=RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ClienteDTO criar(@RequestBody ClienteDTO cliente) {
		return clienteService.criar(cliente);
	}
	
	@RequestMapping(value="/{id}", method= RequestMethod.PUT, consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ClienteDTO alterar(@PathVariable Integer id,@RequestBody ClienteDTO clienteDTO) {
		return clienteService.alterar(id, clienteDTO);
	}
	
	@RequestMapping(value="/{id}", method= RequestMethod.DELETE)
	public void deletar(@PathVariable Integer id) {
		clienteService.deletar(id);
	}
	
}
