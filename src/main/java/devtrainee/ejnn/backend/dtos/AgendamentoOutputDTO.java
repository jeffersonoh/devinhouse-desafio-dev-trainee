package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.time.LocalDateTime;

import devtrainee.ejnn.backend.dtos.ClienteWithoutAgendamentosDTO;
import devtrainee.ejnn.backend.dtos.ExameOutputDTO;

@Data
public class AgendamentoOutputDTO {
    private long id;
    private LocalDateTime timestamp;
    private ClienteWithoutAgendamentosDTO cliente;
    private ExameOutputDTO exame;
}
