package br.com.devinhouse.trainee.services;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.trainee.entities.Exame;
import br.com.devinhouse.trainee.repositories.ExameRepository;

@Service
public class ExameServices implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Autowired
	private ExameRepository exameRepository;
	
	protected List<Exame> findAllExams(){
		return exameRepository.findAll();
	}
	
	protected Exame findByName(String name) {
		Exame foundExam = new Exame();
		List<Exame> allExams = findAllExams();
		
		for (Exame each : allExams) {
			if(name.equals(each.getNome())) {
				foundExam = each;
			}
		}
		
		return foundExam;
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
