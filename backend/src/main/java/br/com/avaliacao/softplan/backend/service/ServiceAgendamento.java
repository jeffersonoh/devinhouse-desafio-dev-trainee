package br.com.avaliacao.softplan.backend.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.avaliacao.softplan.backend.entity.Agendamento;
import br.com.avaliacao.softplan.backend.repository.RepositoryAgendamento;

@Service
@Transactional
public class ServiceAgendamento {
	
	@Autowired
	RepositoryAgendamento repository;
	
	@Autowired
	ServiceExame serviceExame;

	@Autowired
	ServiceCliente serviceCliente;
	
	public boolean horarioEstaDiponivel(String horario) {
		return repository.findByHorario(horario).isPresent();
	}
	
	public boolean dataEstaDisponivel(String data) {
		return repository.findByData(data).isPresent();
	}
	
	public boolean agendamentoEstaDisponivel(Agendamento agendamento) {
		return repository.findById(agendamento.getIdAgendamento()).isPresent();
	}
	
	public ResponseEntity<?> agendarAtendimento(Agendamento agendamento) {
		//checar se cpf esta cadastrado
		if (!serviceCliente.clienteEstaCadastrado(agendamento.getClienteTable())) {
			return new ResponseEntity<>("{\n   Cliente não cadastrado \n}", HttpStatus.BAD_REQUEST);
		}
		
		//checar se o exame esta cadastrado
		if (!serviceExame.exameEstaCadastrado(agendamento.getExameTable())) {
			return new ResponseEntity<>("{\n   Exame incorreto \n}", HttpStatus.BAD_REQUEST);
		}
		
		// checar se existe disponibilidade de hora
		
		// checar se existe disponibilidade de data
		repository.save(agendamento);
		return new ResponseEntity<>("{\n   Agendamento realizado com sucesso \n}", HttpStatus.OK);
	}
	
	
	
	
}
