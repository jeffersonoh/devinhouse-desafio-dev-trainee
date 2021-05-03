package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.util.List;
import java.time.LocalDate;


@Data
public class ClienteWithoutAgendamentosDTO {
    private long id;
    private String nome;
    private String sobrenome;
    private LocalDate dataDeNascimento;
    private String cpf;
}
