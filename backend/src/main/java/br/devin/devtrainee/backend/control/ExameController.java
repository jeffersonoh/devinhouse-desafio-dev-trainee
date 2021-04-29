package br.devin.devtrainee.backend.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.devin.devtrainee.backend.model.Exame;
import br.devin.devtrainee.backend.service.ExameService;

@RestController
public class ExameController {
	
	@Autowired
	private ExameService service;
	
	@GetMapping(headers="api-version=2021-04-28", path="/v1/exame", produces="application/json")
	public List<Exame> getAllClientes() {
		return this.service.pegaTodosExames();		
	}

}
