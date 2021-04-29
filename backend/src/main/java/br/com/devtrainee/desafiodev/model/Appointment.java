package br.com.devtrainee.desafiodev.model;

import java.time.LocalDateTime;

import javax.persistence.*;

import org.springframework.data.annotation.Id;

@Entity
@Table(name = "Appointment")
public class Appointment {

  @Id
  @GeneratedValue
  private Long id;
  @Column(name = "DateAndTime", nullable = false)
  private LocalDateTime DateAndTime;

}
