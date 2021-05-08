package br.devin.devtrainee.backend.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import br.devin.devtrainee.backend.model.Exame;
import br.devin.devtrainee.backend.repository.ExameRepository;

@Service
@Transactional
public class ExameService {
	
	@Autowired
	private ExameRepository examerep;
	
	public Exame cadastraExame(Exame exame) {
		return this.examerep.save(exame);
	}
	
	public List<Exame> buscaTodosExames() {
		return this.examerep.findAll();
	}
	
	public Exame buscaExamePorID(Long id) {
		return this.examerep.findById(id).orElseThrow(
				() -> new ResponseStatusException(
						HttpStatus.BAD_REQUEST, 
						"Não foi encontrado exame com o ID: "+ id+". \nInforme um novo ID.")
				);
	}
	
	public ResponseEntity<?> atualizaExame(Long id, Exame novoExame) {
		if(this.examerep.existsById(id)) {
			novoExame.setIdExame(id);
			this.examerep.save(novoExame);
			return  ResponseEntity.noContent()
					.build();
		}
		return  ResponseEntity.badRequest()
				.build();
	}
	
	public ResponseEntity<?> deletaExame(Long id) {
		if(this.examerep.existsById(id)) {
			this.examerep.deleteById(id);
			return  ResponseEntity.noContent()
					.build();
		}
		return  ResponseEntity.badRequest()
				.build();
	}

}
