package br.com.avaliacao.softplan.backend.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.avaliacao.softplan.backend.entity.Agendamento;
import br.com.avaliacao.softplan.backend.service.ServiceAgendamento;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
public class ControllerAgendamento {

	@Autowired
	ServiceAgendamento service;
	// TODO: Deverá haver um endpoint para listagem dos exames disponíveis para
	// agendamento, exibindo apenas nome do exame e id;

	// TODO: Deverá haver um endpoint para adição de um agendamento

	@PostMapping(path = "/agendamento", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> agendarAtendimento(@RequestBody Agendamento agendamento) {
		return service.agendarAtendimento(agendamento);
	}

	/*
	 * @PostMapping(path = "/agendamento", consumes = APPLICATION_JSON_VALUE,
	 * produces = APPLICATION_JSON_VALUE) public Agendamento
	 * agendarAtendimento(@RequestBody Agendamento agendamento) { return
	 * service.agendarAtendimento(agendamento); }
	 */

	// TODO: Deverá haver um endpoint para edição de um agendamento realizado,
	// apenas dia e hora poderão ser editados;

	// TODO: Deverá haver um endpoint para exclusão de um agendamento realizado;
}
