package br.com.devtrainee.desafiodev.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
@Entity
public class Client {

  @Id
  @GeneratedValue
  private Long id;
  private String name;
  private String cpf;
  private LocalDate birthDate;

  
  // CONSULTA("Consulta", 1),
  // DESINTOMETRIA("Desintometria", 2), 
  // RESSONANCIA_MAGNETICA("Ressonancia Magnetica", 3),
  // TOMOGRAFIA("Tomografia", 4), 
  // ULTRASONOGRAFIA("Ultrasonografia", 5), 
  // ECOGRAFIA("Ecografia", 6);

  // private String description;
  // private Integer identifier;

  // AppointmentType(String description, Integer identifier) {
  //   this.description = description;
  //   this.identifier = identifier;
  // }

  // public String getDescription() {
  //   return description;
  // }

  // public Integer getIdentifier() {
  //   return identifier;
  // }

  // public EnumMap<AppointmentType, Integer> getAllAppointments() {
  //   return 
  // }
  // public Stream<AppointmentType> getAllAppointments() {
  //   return 
  // }
  
}
