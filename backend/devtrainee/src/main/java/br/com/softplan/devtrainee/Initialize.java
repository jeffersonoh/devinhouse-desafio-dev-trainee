package br.com.softplan.devtrainee;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;


import br.com.softplan.devtrainee.entity.ClientEntity;
import br.com.softplan.devtrainee.entity.MedicalExamEntity;
import br.com.softplan.devtrainee.entity.ScheduleEntity;
import br.com.softplan.devtrainee.repository.ClientRepository;
import br.com.softplan.devtrainee.repository.MedicalExamRepository;
import br.com.softplan.devtrainee.repository.ScheduleRepository;


@Configuration
public class Initialize implements CommandLineRunner {

	@Autowired
	MedicalExamRepository medicalExam;
	@Autowired
	ClientRepository clientRepo;
	@Autowired 
	ScheduleRepository schedule;
	
	
	@Override
	public void run(String... args) {
		
		int listInit = 10;
		
		
		for (int i = 0; i < listInit; i++) {
			MedicalExamEntity medicalExamDb = new MedicalExamEntity();
			medicalExamDb.setTypeOfExam("exame " + (i + 1));
			medicalExam.save(medicalExamDb);
			String cpf = "4595959595"+i;
			String name = "maria"+i;
			LocalDate birth = LocalDate.of(1980, 3, 7);
			ClientEntity clientDb = new ClientEntity(name, birth, cpf);
			clientRepo.saveAndFlush(clientDb);
			LocalDateTime dateSchedule = LocalDateTime.of(2021, 3, 7+i, 8+i, 30, 59);
			//LocalTime timeSchedule = LocalTime.of(6+i,30);
			ScheduleEntity scheduleCreate = new ScheduleEntity();
			scheduleCreate.setClient(clientDb);
			scheduleCreate.setExam(medicalExamDb);
			scheduleCreate.setScheduledDateTime(dateSchedule);
			schedule.save(scheduleCreate);
			
		}
		
	}

}
