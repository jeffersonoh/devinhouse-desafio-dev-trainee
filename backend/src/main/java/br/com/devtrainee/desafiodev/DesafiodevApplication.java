package br.com.devtrainee.desafiodev;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.DependsOn;
import org.springframework.core.annotation.Order;

import br.com.devtrainee.desafiodev.model.Client;
import br.com.devtrainee.desafiodev.model.Exam;
import br.com.devtrainee.desafiodev.model.ExamEnum;
import br.com.devtrainee.desafiodev.repository.ExamRepository;
import br.com.devtrainee.desafiodev.model.Appointment;

@SpringBootApplication
public class DesafiodevApplication {

  public static void main(String[] args) {
    SpringApplication.run(DesafiodevApplication.class, args);
  }

  @Bean
  public ModelMapper modelMapper() {
    ModelMapper modelMapper = new ModelMapper();

    modelMapper.createTypeMap(String.class, LocalDate.class);
    modelMapper.addConverter(toStringDate);
    modelMapper.getTypeMap(String.class, LocalDate.class).setProvider((request) -> LocalDate.now());

    modelMapper.addConverter(new AbstractConverter<>() {
      @Override
      protected String convert(LocalDate source) {
        return source.format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
      }
    }, LocalDate.class, String.class);
    return modelMapper;
  }

  private static final Converter<String, LocalDate> toStringDate = new AbstractConverter<>() {
    @Override
    protected LocalDate convert(String source) {
      DateTimeFormatter format = DateTimeFormatter.ofPattern("dd/MM/yyyy");
      return LocalDate.parse(source, format);
    }
  };

  // @Bean
  // public ApplicationRunner examInitializer(ExamRepository repository, ClientRepository clientRepository) {
  //   return args -> {
  //     if (!repository.findAll().isEmpty())
  //       return;
  //     repository.saveAll(Arrays.asList(Exam.builder().name(ExamEnum.DESINTOMETRIA).build(),
  //         Exam.builder().name(ExamEnum.RESSONANCIA_MAGNETICA).build(), Exam.builder().name(ExamEnum.TOMOGRAFIA).build(),
  //         Exam.builder().name(ExamEnum.ULTRASONOGRAFIA).build(), Exam.builder().name(ExamEnum.ECOGRAFIA).build()));
  //   };

  // }

    // Client client1 = Client.builder().cpf("111.111.111-11").name("name").lastName("lastName").birthDate(LocalDate.now()).build();
    // // client1.appendAppointment(Appointment.builder().examEnum(ExamEnum.ULTRASONOGRAFIA).scheduledTime(OffsetDateTime.now()).build());
    // Client client2 = Client.builder().cpf("211.111.111-11").name("pedro").lastName("Sampaio").birthDate(LocalDate.now()).build();
    // // client2.appendAppointment(Appointment.builder().examEnum(ExamEnum.ECOGRAFIA).scheduledTime(OffsetDateTime.now()).build());
    // Client client3 = Client.builder().cpf("311.111.111-11").name("paulo").lastName("Silva").birthDate(LocalDate.now()).build();
    // // client3.appendAppointment(Appointment.builder().examEnum(ExamEnum.RESSONANCIA_MAGNETICA).scheduledTime(OffsetDateTime.now()).build());
    // Client client4 = Client.builder().cpf("411.111.111-11").name("Sabrina").lastName("lo").birthDate(LocalDate.now()).build();
    // // client4.appendAppointment(Appointment.builder().examEnum(ExamEnum.ULTRASONOGRAFIA).scheduledTime(OffsetDateTime.now()).build());
    // List<Client> clientList = Arrays.asList(client1, client2, client3, client4);
  // @Bean(initMethod = "init")
  // @Order(2)
  // public ApplicationRunner clientInitializer(ClientRepository repository) {
  //   return args -> {
  //     if (!repository.findAll().isEmpty()) return;
  //     repository.saveAll(Arrays.asList(
  //       Client.builder().cpf("111.111.111-11").name("name").lastName("lastName").birthDate(LocalDate.now()).build(),
  //       Client.builder().cpf("211.111.111-11").name("pedro").lastName("Sampaio").birthDate(LocalDate.now()).build(),
  //       Client.builder().cpf("311.111.111-11").name("paulo").lastName("Silva").birthDate(LocalDate.now()).build(),
  //       Client.builder().cpf("411.111.111-11").name("Sabrina").lastName("lo").birthDate(LocalDate.now()).build()
  //       ));
  //     };
  // }

}