package br.com.devtrainee.desafiodev.model;

import java.util.Set;

import javax.persistence.*;

import lombok.Builder;

@Builder
@Entity
@Table(name = "Tests")
public class Exam {

  @Id
  @GeneratedValue
  private Long id;

  //@Column(columnDefinition = "ENUM('DESINTOMETRIA', 'RESSONANCIA_MAGNETICA', 'TOMOGRAFIA', 'ULTRASONOGRAFIA', 'ECOGRAFIA')")
  @Enumerated(EnumType.STRING)
  private ExamEnum name;

  @OneToMany
  private Set<Appointment> appointment;

}
