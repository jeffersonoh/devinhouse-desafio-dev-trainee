package br.com.devtrainee.desafiodev.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

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
