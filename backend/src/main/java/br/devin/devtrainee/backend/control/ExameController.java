package br.devin.devtrainee.backend.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.devin.devtrainee.backend.model.Exame;
import br.devin.devtrainee.backend.service.ExameService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ExameController {
	
	@Autowired
	private ExameService service;
	
	@GetMapping(path="/v1/exame", produces="application/json")
	public List<Exame> buscarTodosExames() {
		return this.service.buscaTodosExames();		
	}

}
