package devtrainee.ejnn.backend.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Data
public class Exame {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;
    private String nome;
    private String notaInterna;
}
