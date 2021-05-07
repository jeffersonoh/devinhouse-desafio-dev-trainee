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

import br.com.izy.dto.AgendamentoDTOFilter;
import br.com.izy.dto.AgendamentoDTOInput;
import br.com.izy.dto.AgendamentoDTOOutput;
import br.com.izy.dto.AgendamentoDTOUpdate;
import br.com.izy.entity.Agendamento;
import br.com.izy.service.AgendamentoService;

@CrossOrigin
@RestController
@RequestMapping(value = "/v1" + "/agendamentos")
public class AgendamentoController {
	
	@Autowired
	private AgendamentoService service;
	
	@GetMapping(value = "/total", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public Long count() {
		return service.count();
	}
	
	@PostMapping(value = "/filtro-data", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public List<AgendamentoDTOOutput> findAgendamentoPorData(@Valid @RequestBody AgendamentoDTOFilter agendamentoDTO) {
		List<Agendamento> agendamentos = service.findAgendamentosPorData(agendamentoDTO);
		
		List<AgendamentoDTOOutput> result = new ArrayList<AgendamentoDTOOutput>();
		
		agendamentos.forEach(agendamento -> {
			result.add(new AgendamentoDTOOutput(agendamento));
		});
		
		return result;
	}
	
	@GetMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public List<AgendamentoDTOOutput> findAll(@RequestParam(required = false) Long cliente_id, @RequestParam(required = false) Long exame_id) {
		List<Agendamento> agendamentos = service.findAll(cliente_id, exame_id);
		
		List<AgendamentoDTOOutput> result = new ArrayList<AgendamentoDTOOutput>();
		
		agendamentos.forEach(agendamento -> {
			result.add(new AgendamentoDTOOutput(agendamento));
		});
		
		return result;
	}
	
	@GetMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	public AgendamentoDTOOutput find(@PathVariable Long id) {
		Agendamento agendamento = service.find(id);
		
		return new AgendamentoDTOOutput(agendamento);
	}
	
	@PostMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.CREATED)
	public AgendamentoDTOOutput create(@Valid @RequestBody AgendamentoDTOInput agendamentoDTO) {
		Agendamento agendamento = service.create(agendamentoDTO, agendamentoDTO.getClienteId(), agendamentoDTO.getExameId());
		
		return new AgendamentoDTOOutput(agendamento);
	}
	
	@PutMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void update(@PathVariable Long id, @Valid @RequestBody AgendamentoDTOUpdate agendamentoDTO) {
		service.update(id, agendamentoDTO);
	}
	
	@DeleteMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
}
