package br.com.devinhouse.trainee.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import br.com.devinhouse.trainee.entities.Exame;
import br.com.devinhouse.trainee.repositories.ExameRepository;

@Configuration
public class InitializationMock implements CommandLineRunner {
	
	@Autowired
	protected ExameRepository exameRepository;
	
	@Override
	public void run(String... args) throws Exception {
		String[] listExamNames = new String[6];
		listExamNames[0] = "Ultrassonografia";
		listExamNames[1] = "Ecocardiograma bidimensional com doppler";
		listExamNames[2] = "Raio X contrastado";
		listExamNames[3] = "Tomografia computadorizada";
		listExamNames[4] = "Ressonância magnética";
		listExamNames[5] = "Radiografia";

		for(int i = 0; i < listExamNames.length; i++) {
			Exame exam = new Exame();
			exam.setNome(listExamNames[i]);
			
			exameRepository.save(exam);
		}
	}
}
