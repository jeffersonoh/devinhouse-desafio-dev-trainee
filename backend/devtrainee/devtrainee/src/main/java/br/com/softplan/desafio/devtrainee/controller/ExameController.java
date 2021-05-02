package br.com.softplan.desafio.devtrainee.controller;

import br.com.softplan.desafio.devtrainee.entity.Exame;
import br.com.softplan.desafio.devtrainee.service.ExameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;

@RestController
@RequestMapping("api/v1/exames")
public class ExameController {

	@Autowired
	ExameService exameService;

	@GetMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public List<Exame> getExames() {
		return exameService.getExames();
	}

	@GetMapping(path = "{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public Exame getExameById(@PathVariable Long id) {
		return exameService.getExameById(id);
	}

	@PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public void registrarExame(@RequestBody Exame exame) {
		exameService.novoExame(exame);
	}

	@PutMapping(path = "{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void atualizarExame(@PathVariable Long id, 
								@RequestBody Exame exame) {
		exameService.atualizarExame(id, exame);

	}
	
	@DeleteMapping(path = "{id}", consumes = APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletarExame(@PathVariable Long id) {
		exameService.deletarExame(id);
	}

}