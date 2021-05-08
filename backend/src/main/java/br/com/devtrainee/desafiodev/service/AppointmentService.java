package br.com.devtrainee.desafiodev.service;

import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devtrainee.desafiodev.DTO.AppointmentOutDTO;
import br.com.devtrainee.desafiodev.model.Appointment;
import br.com.devtrainee.desafiodev.model.Client;
import br.com.devtrainee.desafiodev.model.Exam;
import br.com.devtrainee.desafiodev.model.ExamEnum;
import br.com.devtrainee.desafiodev.repository.AppointmentRepository;
import br.com.devtrainee.desafiodev.repository.ClientRepository;

@Service
public class AppointmentService {

  @Autowired
  AppointmentRepository appointmentRepository;

  @Autowired
  ModelMapper modelMapper;
  
  public Appointment toClient(Appointment appointmentDTO) {
    return modelMapper.map(appointmentDTO, Appointment.class);
  }
  
  public AppointmentOutDTO toDto(Appointment appointment) {
    return modelMapper.map(appointment, AppointmentOutDTO.class);
  }
  
  public List<AppointmentOutDTO> toDto(List<Appointment> appointments) {
    return appointments.stream().map(this::toDto).collect(Collectors.toList());
  }
  
  public List<AppointmentOutDTO> obtainAllAppointments() {
    return toDto(appointmentRepository.findAll());
  }


  @Autowired
  ClientRepository clientRepository;
  public void vai() {
    // new Client();
    // appointmentRepository.save(Appointment.builder().scheduledTime(OffsetDateTime.now()).exam(examService.obtainAnExamByEnum(ExamEnum.DESINTOMETRIA)).client(clientRepository.findById(1L).get()).build());
    clientRepository.findAll().forEach(client -> {client.appendAppointment(Appointment.builder().examEnum(ExamEnum.ULTRASONOGRAFIA).scheduledTime(OffsetDateTime.now()).build()); clientRepository.save(client);});
    // clientRepository.findById(1L).get().addAppointment(Appointment.builder().scheduledTime(OffsetDateTime.now()).exam(examService.obtainAnExamByEnum(ExamEnum.DESINTOMETRIA)).build());
    // clientRepository.save(clientRepository.findById(1L).get());
  }

}
