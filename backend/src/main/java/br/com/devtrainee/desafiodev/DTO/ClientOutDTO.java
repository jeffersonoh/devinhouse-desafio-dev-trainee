package br.com.devtrainee.desafiodev.DTO;

import java.time.LocalDate;
import java.util.Set;

import br.com.devtrainee.desafiodev.model.Appointment;
import lombok.Data;


@Data
public class ClientOutDTO {

  private Long id;
  private String name;
  private String lastName;
  private String cpf;
  private String birthDate;

  private Set<Appointment> appointment;

  // @Override
  // public String toString() {
  //   return "ClientOutDTO [appointment=" + appointment + ", birthDate=" + birthDate + ", cpf=" + cpf + ", id=" + id
  //       + ", lastName=" + lastName + ", name=" + name + "]";
  // }
  
}
