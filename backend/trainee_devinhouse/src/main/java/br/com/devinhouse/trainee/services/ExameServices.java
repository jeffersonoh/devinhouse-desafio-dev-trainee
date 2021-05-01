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
	
	protected Exame findByNome(String nome) {
		List<Exame> allExams = exameRepository.findAll();
		Exame foundExam = new Exame();
		
		for(Exame each : allExams) {
			if(nome.equals(each.getNome())) {
				foundExam = each;
			}
		}
		
		return foundExam;
	}
	
	protected boolean validateNewExam(String name) {
		boolean status = false;
		List<Exame> allExams = exameRepository.findAll();
		
		for(Exame each : allExams) {
			if(name.equals(each.getNome())) {
				status = true;
			}
		}
		
		return status;
	}
	
	// Criar exame
	public Exame create(Exame obj) {
		Exame exam = new Exame();
		
		if(!validateNewExam(obj.getNome())) {
			exameRepository.save(obj);
			exam = findByNome(obj.getNome());
			
			return exam;
		} throw new RuntimeException("O exame: " + obj.getNome() + " ja existe na base de dados");
	}
	
	// Consultar todos os exames
	public List<Exame> getAllExams(){
		return exameRepository.findAll();
	}
	
	// Exclusao de exame
	public List<Exame> delete(Integer id){
		Exame foundExam = exameRepository.findById(id).get();
		exameRepository.delete(foundExam);
		
		return exameRepository.findAll();
	}
}
