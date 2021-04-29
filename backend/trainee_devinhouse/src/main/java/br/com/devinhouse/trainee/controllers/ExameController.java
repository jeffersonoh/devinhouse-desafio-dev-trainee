package br.com.devinhouse.trainee.controllers;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.devinhouse.trainee.entities.Exame;
import br.com.devinhouse.trainee.services.ExameServices;

@RestController
@RequestMapping(value = "/exames/v1", headers = "api-version=1")
public class ExameController {

	@Autowired
	private ExameServices exameServices;	
	
	// Endpoint para criacao de exame
	@RequestMapping(value = "/cadastrar", method = POST, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public Exame registerExam(@RequestBody Exame obj) {
		return exameServices.create(obj);
	}
	
	// Deverá haver um endpoint para listagem dos exames disponíveis para agendamento, exibindo apenas nome do exame e id;
	@RequestMapping(value = "/consultar", method = GET, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public List<Exame> getAllExams(){
		return exameServices.getAllExams();
	}
	
	// Endpoint para exclusao de exame
	@RequestMapping(value = "/deletar/id/{id}", method = DELETE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.ACCEPTED)
	public List<Exame> removerExame(@PathVariable Integer id){
		return exameServices.delete(id);
	}
	
}
