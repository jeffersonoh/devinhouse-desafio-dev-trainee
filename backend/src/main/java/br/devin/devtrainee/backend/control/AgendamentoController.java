package br.devin.devtrainee.backend.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.devin.devtrainee.backend.model.Agendamento;
import br.devin.devtrainee.backend.service.AgendamentoService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AgendamentoController {
	
	@Autowired
	private AgendamentoService service;
	
	@PostMapping(path="/v1/agendamento", consumes="application/json", produces="application/json")
	@ResponseStatus(HttpStatus.CREATED)
	public Agendamento cadastraAgendamento(@Validated @RequestBody Agendamento agendamento) {
		return this.service.cadastrarAgendamento(agendamento);
	}
	
	@GetMapping(path="/v1/agendamento-exame", produces="application/json")
	public List<Agendamento> buscaTodosAgendamentoPorExameEData(@RequestParam Long idExame, @RequestParam String data) {
		return this.service.buscarTodosAgendamentoPorExameEData(idExame, data);
	}
	
	@GetMapping(path="/v1/agendamento-cliente", produces="application/json")
	public List<Agendamento> buscaTodosAgendamentoPorCliente(@RequestParam Long idCliente) {
		return this.service.buscarTodosAgendamentoPorCliente(idCliente);
	}
	
	@GetMapping(path="/v1/agendamento-horarios", produces="application/json")
	public List<String> buscaTodosHorariosAgendadosNoDia(@RequestParam Long idExame, @RequestParam String data) {
		return this.service.buscarTodosHorariosAgendadosDoExameNoDia(idExame,data);
	}
	
	@PutMapping(path="/v1/agendamento", consumes="application/json")
	public ResponseEntity<?> atualizaAgendamento(@RequestParam Long id, @Validated @RequestBody Agendamento novo){
		return this.service.atualizarAgendamento(id, novo);
	}
	
	@DeleteMapping(path="/v1/agendamento")
	public ResponseEntity<?> deletaAgendamento(@RequestParam Long id) {
		return this.service.deletarAgendamento(id);
	}

}
