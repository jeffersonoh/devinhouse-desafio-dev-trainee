package br.com.avaliacao.softplan.backend.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.avaliacao.softplan.backend.entity.Agendamento;
import br.com.avaliacao.softplan.backend.service.ServiceAgendamento;

@RestController
public class ControllerAgendamento {

	@Autowired
	private ServiceAgendamento service;
	
	@GetMapping(path = "/v1/agendamento/{nome-exame}")
	public List<String> listarExamesIndisponíveis(@PathVariable("nome-exame") String exame, 
			@RequestParam String data) {
		return service.listarExamesIndisponíveis(exame, data);
	}
	
	@PostMapping(path = "/v1/agendamento", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> agendarAtendimento(@RequestBody Agendamento agendamento) {
		return service.agendarAtendimento(agendamento);
	}

	@PutMapping(path = "/v1/agendamento/{id}", consumes = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> atualizarAgendamento(@PathVariable Long id, @RequestBody Agendamento agendamento){
		return service.atualizarAgendamento(id, agendamento);
	}

	@DeleteMapping(path = "/v1/agendamento/{id}")
	public ResponseEntity<?> deletarAgendamento(@PathVariable Long id) {
		return service.deletarAgendamento(id);
	}
}