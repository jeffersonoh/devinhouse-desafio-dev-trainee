package br.com.devtrainee.desafiodev.service;

import java.time.OffsetDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devtrainee.desafiodev.model.Appointment;
import br.com.devtrainee.desafiodev.model.Exam;
import br.com.devtrainee.desafiodev.model.ExamEnum;
import br.com.devtrainee.desafiodev.repository.AppointmentRepository;

@Service
public class AppointmentService {
  
  @Autowired
  AppointmentRepository appointmentRepository;

  public void vai() {
    // new Client();
    appointmentRepository.save(Appointment.builder().dateAndTime(OffsetDateTime.now()).build());
  }

}
