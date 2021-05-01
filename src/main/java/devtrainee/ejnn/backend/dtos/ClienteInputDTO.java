package devtrainee.ejnn.backend.dtos;

import lombok.Data;
import lombok.Builder;

import java.time.LocalDate;


@Data
@Builder
public class ClienteInputDTO {
    private String nome;
    private String sobrenome;
    private LocalDate dataDeNascimento;
    private String cpf;
}
