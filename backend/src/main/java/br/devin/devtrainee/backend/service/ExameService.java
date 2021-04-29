package br.devin.devtrainee.backend.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.devin.devtrainee.backend.model.Exame;
import br.devin.devtrainee.backend.repository.ExameRepository;

@Service
public class ExameService {
	
	@Autowired
	private ExameRepository examerep;
	
	public Exame adicionaExame(Exame exame) {
		return this.examerep.save(exame);
	}
	
	public List<Exame> pegaTodosExames() {
		return this.examerep.findAll();
	}

}
