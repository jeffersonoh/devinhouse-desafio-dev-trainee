package br.com.devtrainee.desafiodev.DTO;

import java.time.OffsetDateTime;

import br.com.devtrainee.desafiodev.model.Client;
import br.com.devtrainee.desafiodev.model.Exam;
import lombok.Data;

@Data
public class AppointmentInDTO {

  private OffsetDateTime dateAndTime;
  private Long examId;
  private Long clientId;
}
