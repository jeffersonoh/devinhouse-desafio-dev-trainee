package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.time.LocalDate;


@Data
public class ClienteOutputDTO {
    private long id;
    private String nome;
    private String sobrenome;
    private LocalDate dataDeNascimento;
    private String cpf;
}
