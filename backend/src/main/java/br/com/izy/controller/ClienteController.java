package br.com.izy.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.izy.dto.ClienteDTOInput;
import br.com.izy.dto.ClienteDTOOuput;
import br.com.izy.dto.ClienteDTOUpdate;
import br.com.izy.entity.Cliente;
import br.com.izy.service.ClienteService;

@CrossOrigin
@RestController
@RequestMapping(value = "/v1" + "/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteService service;
	
	@GetMapping(value = "/total", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public Long count() {
		return service.count();
	}
	
	@GetMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public List<ClienteDTOOuput> findAll(@RequestParam(required = false) String busca) {
		List<Cliente> clientes = service.findAll(busca);
		
		List<ClienteDTOOuput> result = new ArrayList<ClienteDTOOuput>();
		
		clientes.forEach(cliente -> {
			result.add(new ClienteDTOOuput(cliente));
		});
		
		return result;
	}
	
	@GetMapping(value = "/{cpf}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public ClienteDTOOuput find(@PathVariable String cpf) {
		Cliente cliente = service.find(null, cpf);
		
		return new ClienteDTOOuput(cliente);
	}
	
	@PostMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.CREATED)
	public ClienteDTOOuput create(@Valid @RequestBody ClienteDTOInput clienteDTO) {
				
		Cliente result = service.create(clienteDTO);
		
		return new ClienteDTOOuput(result);
	}
	
	@PutMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void update(@PathVariable Long id, @RequestBody ClienteDTOUpdate clienteDTO) {
		service.update(id, clienteDTO);
	}
	
	@DeleteMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}
