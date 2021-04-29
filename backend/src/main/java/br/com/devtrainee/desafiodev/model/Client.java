package br.com.devtrainee.desafiodev.model;

import java.time.LocalDate;

import javax.persistence.Entity;

import org.springframework.data.annotation.Id;

@Entity
public class Client {

  @Id
  private Long id;
  private String name;
  private String cpf;
  private LocalDate birthDate;
  
}
