package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.util.List;
import java.time.ZonedDateTime;


@Data
public class ClienteWithoutAgendamentosDTO {
    private long id;
    private String nome;
    private String sobrenome;
    private ZonedDateTime dataDeNascimento;
    private String cpf;
}
