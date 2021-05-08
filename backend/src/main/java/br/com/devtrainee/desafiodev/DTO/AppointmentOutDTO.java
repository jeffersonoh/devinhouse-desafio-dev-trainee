package br.com.devtrainee.desafiodev.DTO;

import java.time.OffsetDateTime;

import lombok.Data;

@Data
public class AppointmentOutDTO {

  private Long id;
  private OffsetDateTime dateAndTime;
  private String exam;
  private Long clientId;
}