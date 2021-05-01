package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.time.LocalDate;


@Data
public class ClienteInputDTO {
    private String nome;
    private String sobrenome;
    private LocalDate dataDeNascimento;
    private String cpf;
}
