package br.com.devinhouse.trainee.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devinhouse.trainee.services.AgendamentoServices;

@RestController
@RequestMapping(value = "/agendamentos/v1", headers = "api-version=1")
public class AgendamentosController {
	
	@Autowired
	private AgendamentoServices agendamentoServices;

	// Deverá haver um endpoint para inclusao de um agendamento
	// Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados;
	// Deverá haver um endpoint para exclusão de um agendamento realizado;

}