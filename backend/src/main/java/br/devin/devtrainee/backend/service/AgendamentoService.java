package br.devin.devtrainee.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import br.devin.devtrainee.backend.model.Agendamento;
import br.devin.devtrainee.backend.model.Cliente;
import br.devin.devtrainee.backend.model.Exame;
import br.devin.devtrainee.backend.repository.AgendamentoRepository;

@Service
@Transactional
public class AgendamentoService {

	@Autowired
	private AgendamentoRepository agendamentorep;
	
	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private ExameService exameService;
	
	public Agendamento cadastrarAgendamento(Agendamento agendamento) {
		return this.agendamentorep.save(agendamento);
	}
	
	public List<Agendamento> buscarTodosAgendamentos() {
		return this.agendamentorep.findAll();
	}
	
	public Agendamento buscarAgendamentoPorID(Long id) {
		return this.agendamentorep.findById(id).orElseThrow(
				() -> new ResponseStatusException(
						HttpStatus.BAD_REQUEST, 
						"Não foi encontrado Agendamento com o ID: "+ id+". \nInforme um novo ID.")
				);
	}
	
	public List<Agendamento> buscarTodosAgendamentoPorExameEData(Long idExame, String data) {
		Exame exame = this.exameService.buscaExamePorID(idExame);
		return this.agendamentorep.findByExameIsAndDataIs(exame, data);
	}
	
	public List<Agendamento> buscarTodosAgendamentoPorCliente(Long idCliente){
		Cliente cliente = this.clienteService.buscarClientePorID(idCliente);
		return this.agendamentorep.findByClienteIs(cliente);
	}
	
	public ResponseEntity<?> atualizarAgendamento(Long id, Agendamento novoAgendamento) {
		if(this.agendamentorep.existsById(id)) {
			novoAgendamento.setIdAgendamento(id);
			this.agendamentorep.save(novoAgendamento);
			return  ResponseEntity.noContent()
					.build();
		}
		return  ResponseEntity.badRequest()
				.build();
	}
	
	public ResponseEntity<?> deletarAgendamento(Long id) {
		if(this.agendamentorep.existsById(id)) {
			this.agendamentorep.deleteById(id);
			return  ResponseEntity.noContent()
					.build();
		}
		return  ResponseEntity.badRequest()
				.build();
	}
}
