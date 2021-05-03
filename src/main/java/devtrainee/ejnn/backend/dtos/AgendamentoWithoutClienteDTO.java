package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.time.LocalDateTime;

import devtrainee.ejnn.backend.dtos.ClienteOutputDTO;
import devtrainee.ejnn.backend.dtos.ExameOutputDTO;

@Data
public class AgendamentoWithoutClienteDTO {
    private long id;
    private LocalDateTime timestamp;
    private ExameOutputDTO exame;
}
