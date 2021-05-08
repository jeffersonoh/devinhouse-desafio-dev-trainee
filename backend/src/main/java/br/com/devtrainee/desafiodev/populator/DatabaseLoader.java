package br.com.devtrainee.desafiodev.populator;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import br.com.devtrainee.desafiodev.model.Appointment;
import br.com.devtrainee.desafiodev.model.Client;
import br.com.devtrainee.desafiodev.model.Exam;
import br.com.devtrainee.desafiodev.model.ExamEnum;
import br.com.devtrainee.desafiodev.repository.ClientRepository;
import br.com.devtrainee.desafiodev.repository.ExamRepository;


@Component
public class DatabaseLoader implements CommandLineRunner {
	
  private final ClientRepository clientRepository;
  private final ExamRepository examRepository;
  // private final Appointment appointment;
  
	@Autowired
	public DatabaseLoader(ClientRepository clientRepository, ExamRepository examRepository) {
		this.clientRepository = clientRepository;
    this.examRepository = examRepository;
	}
  // DESINTOMETRIA
  // RESSONANCIA_MAGNETICA
  // TOMOGRAFIA
  // ULTRASONOGRAFIA
  // ECOGRAFIA
	// @Override
	// public void run(String... strings) throws Exception {
  //   System.out.println("oi");
	// }
  //   @Bean
  // public ApplicationRunner clientInitializer(ClientRepository repository) {
    
    @Override
    public void run(String... args) throws Exception {
      // TODO Auto-generated method stub
        if (examRepository.findAll().isEmpty()) {
          examRepository.save(Exam.builder().name(ExamEnum.DESINTOMETRIA).build());
          examRepository.save(Exam.builder().name(ExamEnum.RESSONANCIA_MAGNETICA).build());
          examRepository.save(Exam.builder().name(ExamEnum.TOMOGRAFIA).build());
          examRepository.save(Exam.builder().name(ExamEnum.ULTRASONOGRAFIA).build());
          examRepository.save(Exam.builder().name(ExamEnum.ECOGRAFIA).build());
        }
        if (clientRepository.findAll().isEmpty()) {
            Client client1 = Client.builder().cpf("111.111.111-11").name("name").lastName("lastName").birthDate(LocalDate.now()).build();
            // clientRepository.save(client1);
            // client1.appendAppointment(Appointment.builder().examEnum(ExamEnum.ULTRASONOGRAFIA).scheduledTime(OffsetDateTime.now()).build());
            // clientRepository.save(client2);
            Client client2 = Client.builder().cpf("211.111.111-11").name("pedro").lastName("Sampaio").birthDate(LocalDate.now()).build();
            // clientRepository.save(client1);
            // client2.appendAppointment(Appointment.builder().examEnum(ExamEnum.ECOGRAFIA).scheduledTime(OffsetDateTime.now()).build());
            Client client3 = Client.builder().cpf("311.111.111-11").name("paulo").lastName("Silva").birthDate(LocalDate.now()).build();
            // client3.appendAppointment(Appointment.builder().examEnum(ExamEnum.RESSONANCIA_MAGNETICA).scheduledTime(OffsetDateTime.now()).build());
            Client client4 = Client.builder().cpf("411.111.111-11").name("Sabrina").lastName("lo").birthDate(LocalDate.now()).build();
            // client4.appendAppointment(Appointment.builder().examEnum(ExamEnum.ULTRASONOGRAFIA).scheduledTime(OffsetDateTime.now()).build());
            List<Client> clientList = Arrays.asList(client1, client2, client3, client4);
            clientRepository.saveAll(clientList);
        }
        
        // Client client1 = Client.builder().cpf("111.111.111-11").name("name").lastName("lastName").birthDate(LocalDate.now()).build();
        // List<Client> clientList = Arrays.asList(client1);
        // examRepository.saveAll(clientList);
    
  }

  //   return args -> {
  //     if (!repository.findAll().isEmpty()) return;
  //     repository.saveAll(clientList);
  //     };
  // }
}