package br.com.izy.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.izy.dto.AgendamentoDTO;
import br.com.izy.entity.Agendamento;
import br.com.izy.service.AgendamentoService;

@CrossOrigin
@RestController
@RequestMapping(value = "/v1" + "/agendamentos")
public class AgendamentoController {
	
	@Autowired
	private AgendamentoService service;
	
	@GetMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public List<AgendamentoDTO> findAll() {
		List<Agendamento> agendamentos = service.findAll();
		
		List<AgendamentoDTO> result = new ArrayList<AgendamentoDTO>();
		
		for (Agendamento agendamento : agendamentos) {
			result.add(new AgendamentoDTO(agendamento));
		}
		
		return result;
	}
	
	@GetMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public AgendamentoDTO find(@PathVariable Long id) {
		Agendamento agendamento = service.find(id);
		
		return new AgendamentoDTO(agendamento);
	}
	
	@PostMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.CREATED)
	public AgendamentoDTO create(@RequestBody AgendamentoDTO body) {
		Agendamento agendamento = service.create(body, body.getClienteId(), body.getExameId());
		
		return new AgendamentoDTO(agendamento);
	}
	
	@PutMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void update(@PathVariable Long id, @RequestBody AgendamentoDTO body) {
		service.update(id, body, body.getClienteId(), body.getExameId());
	}
	
	@DeleteMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}
