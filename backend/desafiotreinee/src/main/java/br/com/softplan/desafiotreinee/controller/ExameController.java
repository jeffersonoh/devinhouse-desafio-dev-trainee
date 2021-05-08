package br.com.softplan.desafiotreinee.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.softplan.desafiotreinee.dto.ExameDTO;
import br.com.softplan.desafiotreinee.service.ExameService;

@RestController
@RequestMapping(value = "/exames")
public class ExameController {

	@Autowired
	private ExameService service;

	@RequestMapping(headers = "api-version=v1", value = "/v1"
			+ "/consulta", method = GET, produces = APPLICATION_JSON_VALUE)

	@ResponseBody
	@ResponseStatus(HttpStatus.OK)
	public List<ExameDTO> recuperarTodosExames() {
		return service.recuperarExamesMocados();
	}
}