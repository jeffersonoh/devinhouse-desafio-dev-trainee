package com.sistemadeagendamento.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.sistemadeagendamento.exception.AgendamentoException;
import com.sistemadeagendamento.exception.ClienteNaoEncontradoException;
import com.sistemadeagendamento.exception.ExameNaoEncontradoException;
import com.sistemadeagendamento.model.Agendamento;
import com.sistemadeagendamento.model.Exame;
import com.sistemadeagendamento.model.Cliente;
import com.sistemadeagendamento.repository.AgendamentoRepository;
import com.sistemadeagendamento.repository.ExameRepository;
import com.sistemadeagendamento.repository.ClientesRepository;

@Service
public class AgendamentoService {
	
	@Autowired
	private ExameRepository exameRepository;

	@Autowired
	private ClientesRepository clienteRepository;
	
	@Autowired
	private AgendamentoRepository agendamentoRepository;
	
	
	public void agendarExame(Integer idDoExame, Integer idDoCliente, LocalDateTime data){
		Optional<Exame> exameEncontrado = exameRepository.findById(idDoExame);
		Optional<Cliente> clienteEncontrado = clienteRepository.findById(idDoCliente);
		
		exameEncontrado.ifPresentOrElse(exame -> {
			clienteEncontrado.ifPresentOrElse(cliente -> {
				Agendamento agendamento = new Agendamento(exame, cliente, data);
				agendamentoRepository.save(agendamento);
			}, () -> {throw new ClienteNaoEncontradoException (HttpStatus.NOT_FOUND, "Cliente não encontrado. Tente novamente.");});
		}, () -> {throw new ExameNaoEncontradoException(HttpStatus.NOT_FOUND, "Exame não encontrado. Tente novamente.");});
	}

	public void atualizarAgendamento(String idDoAgendamento, LocalDateTime data) {
		Optional<Agendamento> agendamentoEncontrado = agendamentoRepository.findById(Integer.parseInt(idDoAgendamento));
		
		agendamentoEncontrado.ifPresentOrElse(agendamento -> {
			if (data != null) {
				agendamento.setData(data);
				agendamentoRepository.save(agendamento);
			}
		}, () -> { throw new AgendamentoException(HttpStatus.NOT_FOUND, "Agendamento não encontrado!"); });
	}
	
	public void deletarAgendamento(Integer idDoAgendamento) {
		Optional<Agendamento> agendamentoEncontrado = agendamentoRepository.findById(idDoAgendamento);
		agendamentoEncontrado.ifPresentOrElse(agendamento -> {
			if (idDoAgendamento != null) {
				agendamentoRepository.deleteById(idDoAgendamento);}
		}, () -> { throw new AgendamentoException(HttpStatus.NOT_FOUND, "Agendamento não encontrado!"); });
		
	}};
