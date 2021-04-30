package br.devin.devtrainee.backend.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.devin.devtrainee.backend.model.Agendamento;
import br.devin.devtrainee.backend.model.Cliente;
import br.devin.devtrainee.backend.model.Exame;
import br.devin.devtrainee.backend.service.AgendamentoService;

@RestController
public class AgendamentoController {
	
	@Autowired
	private AgendamentoService service;
	
	@PostMapping(path="/v1/agendamento", consumes="application/json", produces="application/json")
	@ResponseStatus(HttpStatus.CREATED)
	public Agendamento addAgendamento(@Validated @RequestBody Agendamento agendamento) {
		return this.service.adicionaAgendamento(agendamento);
	}
	
	@GetMapping(path="/v1/agendamento-exame", consumes="application/json", produces="application/json")
	public List<Agendamento> getAllAgendamentoPorExameEData(@Validated @RequestBody Exame exame, @RequestParam String data) {
		return this.service.pegaAgendamentoPorExameEData(exame, data);
	}
	
	@GetMapping(path="/v1/agendamento-cliente", consumes="application/json", produces="application/json")
	public List<Agendamento> getAllAgendamentoPorCliente(@Validated @RequestBody Cliente cliente) {
		return this.service.pegaAgendamentoPorCliente(cliente);
	}
	
	@PutMapping(path="/v1/agendamento", consumes="application/json")
	public ResponseEntity<?> putAgendamento(@RequestParam Long id, @Validated @RequestBody Agendamento novo){
		return this.service.atualizaAgendamento(id, novo);
	}
	
	@DeleteMapping(path="/v1/agendamento")
	public ResponseEntity<?> deleteAgendamento(@RequestParam Long id) {
		return this.service.deletaAgendamento(id);
	}

}
