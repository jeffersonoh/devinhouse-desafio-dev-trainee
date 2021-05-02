package br.com.devtrainee.desafiodev.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.devtrainee.desafiodev.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
  
}
