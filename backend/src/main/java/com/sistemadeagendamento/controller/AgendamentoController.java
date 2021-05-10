package com.sistemadeagendamento.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.sistemadeagendamento.exception.ClienteException;
import com.sistemadeagendamento.model.Agendamento;
import com.sistemadeagendamento.repository.AgendamentoRepository;
import com.sistemadeagendamento.service.AgendamentoService;

@RestController
@RequestMapping("/api/agendamento")
public class AgendamentoController {
	
	@Autowired
	private AgendamentoService agendamentoService;
	
	@Autowired
	private AgendamentoRepository agendamentoRepository;
	
	@GetMapping()
	public List<Agendamento> listarAgendamentos(){
		return agendamentoRepository.findAll();}
	
	@PostMapping()
	public void agendarExame(@RequestBody Agendamento agendamento) {
		agendamentoService.agendarExame(agendamento.getExame().getId(), agendamento.getCliente().getId(), agendamento.getData());
		}
	
	@PatchMapping(path = "/{idDoAgendamento}")
	public void atualizarAgendamento(@PathVariable (value = "idDoAgendamento") String idDoAgendamento, @RequestBody LocalDateTime data) {
		agendamentoService.atualizarAgendamento(idDoAgendamento, data);
	}
	@DeleteMapping(path = "/{idDoAgendamento}")
	public void deletarAgendamento(@PathVariable (value = "idDoAgendamento") Integer idDoAgendamento) {
		agendamentoService.deletarAgendamento(idDoAgendamento);
	}
	}
