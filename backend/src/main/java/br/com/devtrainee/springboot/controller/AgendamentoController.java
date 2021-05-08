package br.com.devtrainee.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.devtrainee.springboot.dto.AgendamentoDTO;
import br.com.devtrainee.springboot.service.AgendamentoService;

@RestController
@RequestMapping(value = "/v1/agendamento") 
public class AgendamentoController {
	
	@Autowired
	private AgendamentoService agendamentoService;

	
	@RequestMapping(value = "" , method = RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<AgendamentoDTO> listarAgendamento() {
		return agendamentoService.listar();
	}
	
	// Para edição de um agendamento realizado, apenas dia e hora poderão ser editados; PUT = 
	@RequestMapping(value = "/{id}" , method = RequestMethod.PUT , consumes = MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public AgendamentoDTO alterarAgendamento(@PathVariable Integer id, @RequestBody AgendamentoDTO agendamentoDTO ) {
		return agendamentoService.alterarAgendamento(id, agendamentoDTO);
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST, consumes= MediaType.APPLICATION_JSON_VALUE, produces= MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public AgendamentoDTO criarAgendamento(@RequestBody AgendamentoDTO agendamento) {
		return agendamentoService.criarAgendamento(agendamento);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE) // ver sobre consumes e produces
	public void deletar(@PathVariable Integer id) {
		agendamentoService.deletar(id);
	}
	
}
