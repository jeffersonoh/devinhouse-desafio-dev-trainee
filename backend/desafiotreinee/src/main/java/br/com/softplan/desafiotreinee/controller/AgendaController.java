package br.com.softplan.desafiotreinee.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
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

import br.com.softplan.desafiotreinee.dto.AgendaDTO;
import br.com.softplan.desafiotreinee.service.AgendaService;

@RestController
@RequestMapping(value = "agenda")
public class AgendaController {

	@Autowired
	private AgendaService service;

	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/editar/agendamento/{id}", method = PUT, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(HttpStatus.OK)
	public AgendaDTO editarAgendamento(@PathVariable Integer id, @RequestBody AgendaDTO newAgendamento) {

		return service.editarAgendamento(id, newAgendamento);
	}

	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/deletar/id/{id}", method = DELETE, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(HttpStatus.OK)
	public List<AgendaDTO> apagarAgendamento(@PathVariable Integer id) {
		return service.apagarAgendamento(id);
	}

	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/consulta", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(HttpStatus.OK)
	public List<AgendaDTO> recuperarAgendamentosMocados() {
		return service.recuperarAgendamentosMocados();
	}

}