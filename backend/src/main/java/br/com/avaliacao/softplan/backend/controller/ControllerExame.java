package br.com.avaliacao.softplan.backend.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.avaliacao.softplan.backend.entity.Exame;
import br.com.avaliacao.softplan.backend.service.ServiceExame;

@RestController
public class ControllerExame {
	//TODO: Deverá haver um endpoint para listagem dos exames disponíveis para agendamento, exibindo apenas nome do exame e id;
	@Autowired
	ServiceExame service;

	@PostMapping(path = "/exame", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> cadastrarExame(@RequestBody Exame exame) {
		return service.cadastrarExame(exame);
	}
	
	@GetMapping(path = "/exame/{nome}", produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> buscarExamePorNome(@PathVariable String nome) {
		return service.buscarExamePorNome(nome);
	}
	
	@PutMapping(path = "/exame", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	public ResponseEntity<?> atualizarExame(@PathVariable String nome, @RequestBody Exame exame) {
		return service.atualizarExame(nome, exame);
	}
	
	@DeleteMapping(path = "/exame/{nome}")
	public ResponseEntity<?> deletarExame(@PathVariable String nome) {
		return service.deletarExame(nome);
	}
}
