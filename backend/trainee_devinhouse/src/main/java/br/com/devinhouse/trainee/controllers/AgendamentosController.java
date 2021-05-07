package br.com.devinhouse.trainee.controllers;


import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.devinhouse.trainee.entities.Agendamento;
import br.com.devinhouse.trainee.services.AgendamentoServices;

@RestController
@RequestMapping(value = "/agendamentos/v1", headers = "api-version=1")
@CrossOrigin
public class AgendamentosController {
	
	@Autowired
	private AgendamentoServices service;
	
	// Deverá haver um endpoint para inclusao de um agendamento
	@RequestMapping(value = "/cadastrar", method = POST, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Agendamento registerScheduling(@RequestBody Agendamento obj) {
		return service.create(obj);
	}
	
	// Endpoint para consulta de agendamentos realizados
	@RequestMapping(value = "/consultar", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public List<Agendamento> findAllSchedules() {
		return service.searchAllSchedules();
	}
	
	// Endpoint para consulta de agendamentos por id
	@RequestMapping(value = "/consultar/id/{id}", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Agendamento findScheduleById(@PathVariable("id") Integer id) {
		return service.searchScheduleById(id);
	}
	
	// Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados
	@RequestMapping(value = "/atualizar/id/{id}", method = PUT, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Agendamento updateScheduleAttribute(@PathVariable Integer id, @RequestBody Agendamento newObj) {
		return service.updateSchedule(id, newObj);
	}
		
	// Deverá haver um endpoint para exclusão de um agendamento realizado
	@RequestMapping(value = "/deletar/id/{id}", method = DELETE)
	@ResponseStatus(HttpStatus.OK)
	public void removeScheduling(@PathVariable Integer id) {
		service.delete(id);
	}	
}