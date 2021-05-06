package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.time.ZonedDateTime;

import devtrainee.ejnn.backend.dtos.ClienteOutputDTO;
import devtrainee.ejnn.backend.dtos.ExameOutputDTO;

@Data
public class AgendamentoWithoutClienteDTO {
    private long id;
    private ZonedDateTime timestamp;
    private ExameOutputDTO exame;
}
