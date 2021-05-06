package br.com.devinhouse.trainee.controllers;


import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<?> registerScheduling(@RequestBody Agendamento obj) {
		return service.create(obj);
	}
	
	// Endpoint para consulta de agendamentos realizados
	@RequestMapping(value = "/consultar", method = GET, produces = APPLICATION_JSON_VALUE)
	public List<Agendamento> findAllSchedules() {
		return service.getAllSchedules();
	}
	
	// Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados
	@RequestMapping(value = "/atualizar/id/{id}", method = PUT, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Agendamento updateScheduleAttribute(@PathVariable Integer id, @RequestBody Agendamento newObj) {
		return service.updateSchedule(id, newObj);
	}
		
	// Deverá haver um endpoint para exclusão de um agendamento realizado
	@RequestMapping(value = "/deletar/id/{id}", method = DELETE)
	public ResponseEntity<?> removeScheduling(@PathVariable Integer id) {
		return service.delete(id);
	}	
}