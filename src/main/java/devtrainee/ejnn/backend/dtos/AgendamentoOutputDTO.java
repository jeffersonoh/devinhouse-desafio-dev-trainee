package devtrainee.ejnn.backend.dtos;

import lombok.Data;

import java.time.LocalDateTime;

import devtrainee.ejnn.backend.domain.Cliente;
import devtrainee.ejnn.backend.domain.Exame;

@Data
public class AgendamentoOutputDTO {
    private long id;
    private LocalDateTime timestamp;
    private Cliente cliente;
    private Exame exame;
}
