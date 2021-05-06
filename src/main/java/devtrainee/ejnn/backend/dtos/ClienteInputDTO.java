package devtrainee.ejnn.backend.dtos;

import lombok.Data;
import lombok.Builder;

import java.time.ZonedDateTime;


@Data
@Builder
public class ClienteInputDTO {
    private String nome;
    private String sobrenome;
    private ZonedDateTime dataDeNascimento;
    private String cpf;
}
