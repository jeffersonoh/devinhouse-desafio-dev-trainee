package br.devin.devtrainee.backend.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@PostMapping(headers="api-version=2021-04-28", path="/v1/agendamento"
			, consumes="application/json", produces="application/json")
	@ResponseStatus(HttpStatus.CREATED)
	public Agendamento addAgendamento(Agendamento agendamento) {
		return this.service.adicionaAgendamento(agendamento);
	}
	
	@GetMapping(headers="api-version=2021-04-28", path="/v1/agendamento"
			, consumes="application/json", produces="application/json")
	public List<Agendamento> getAllAgendamentoPorExameEData(Exame exame, String data) {
		return this.service.pegaAgendamentoPorExameEData(exame, data);
	}
	
	@GetMapping(headers="api-version=2021-04-28", path="/v1/agendamento"
			, consumes="application/json", produces="application/json")
	public List<Agendamento> getAllAgendamentoPorCliente(Cliente cliente) {
		return this.service.pegaAgendamentoPorCliente(cliente);
	}
	
	@PutMapping(headers="api-version=2021-04-28", path="/v1/agendamento")
	public ResponseEntity<?> putAgendamento(Long id, Agendamento novo){
		return this.service.atualizaAgendamento(id, novo);
	}
	
	@DeleteMapping(headers="api-version=2021-04-28", path="/v1/agendamento")
	public ResponseEntity<?> deleteAgendamento(Long id) {
		return this.service.deletaAgendamento(id);
	}

}
