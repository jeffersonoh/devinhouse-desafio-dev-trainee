package br.com.devtrainee.desafiodev.DTO;

import java.time.LocalDate;
import java.util.Set;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.br.CPF;

import br.com.devtrainee.desafiodev.model.Appointment;
import lombok.Data;


@Data
public class ClientInDTO {

  private String name;
  private String lastName;

  
  @Pattern(regexp = "^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$",
  message = "Data precisa seguir o padrão dd/MM/yyyy")
  @NotNull
  private String birthDate;
  
  
  @NotNull
  @CPF
  private String cpf;
  
  // private Set<Appointment> appointment;
  // @Email(message = "Precisa ser um email válido")
  // private String email;
  
}
