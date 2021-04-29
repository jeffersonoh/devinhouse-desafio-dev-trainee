package br.com.devinhouse.trainee.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.trainee.entities.Exame;
import br.com.devinhouse.trainee.repositories.ExameRepository;

@Service
public class ExameServices {

	@Autowired
	private ExameRepository exameRepository;
	
	protected List<Exame> findAllExams(){
		return exameRepository.findAll();
	}
	
	// Criar exame
	public Exame create(Exame obj) {
		return exameRepository.save(obj);
	}
	
	// Consultar todos os exames
	public List<Exame> getAllExams(){
		return exameRepository.findAll();
	}
	
	// Exclusao de exame
	public List<Exame> delete(Integer id){
		Exame filteredExam = exameRepository.findById(id).get();
		exameRepository.delete(filteredExam);
		
		return findAllExams();
	}
	
	
}
