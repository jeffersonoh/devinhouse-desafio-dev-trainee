package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.time.ZonedDateTime;

import devtrainee.ejnn.backend.dtos.ClienteWithoutAgendamentosDTO;
import devtrainee.ejnn.backend.dtos.ExameOutputDTO;

@Data
public class AgendamentoOutputDTO {
    private long id;
    private ZonedDateTime timestamp;
    private ClienteWithoutAgendamentosDTO cliente;
    private ExameOutputDTO exame;
}
