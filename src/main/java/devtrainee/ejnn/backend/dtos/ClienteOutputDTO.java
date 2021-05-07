package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.util.List;
import java.time.ZonedDateTime;

import devtrainee.ejnn.backend.dtos.AgendamentoOutputDTO;


@Data
public class ClienteOutputDTO {
    private long id;
    private String nome;
    private String sobrenome;
    private ZonedDateTime dataDeNascimento;
    private String cpf;
    private List<AgendamentoOutputDTO> agendamentos;
}
