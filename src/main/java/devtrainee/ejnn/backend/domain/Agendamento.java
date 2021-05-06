package devtrainee.ejnn.backend.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
import javax.persistence.ManyToOne;
import static javax.persistence.GenerationType.IDENTITY;

import java.time.LocalDateTime;

import devtrainee.ejnn.backend.domain.Cliente;
import devtrainee.ejnn.backend.domain.Exame;

@Entity
@Data
public class Agendamento {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;
    private LocalDateTime timestamp;
    @ManyToOne
    private Cliente cliente;
    @ManyToOne
    private Exame exame;
}
