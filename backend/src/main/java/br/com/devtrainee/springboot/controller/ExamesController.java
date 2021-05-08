package br.com.devtrainee.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.devtrainee.springboot.dto.ExamesDTO;
import br.com.devtrainee.springboot.service.ExamesService;

@RestController
@RequestMapping(value = "/v1/exames")
public class ExamesController {

	@Autowired
	private ExamesService examesService;
	
	
	//Deverá haver um endpoint para listagem dos exames disponíveis para agendamento, exibindo apenas nome do exame e id;
	
	@RequestMapping(value = "", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<ExamesDTO> listarExames() {
		return examesService.listarExames();
	}
}
