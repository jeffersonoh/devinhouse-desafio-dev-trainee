package devtrainee.ejnn.backend.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

@Entity
@Data
public class Exame {
    @Id
    @GeneratedValue
    private long id;
    private String nome;
    private String notaInterna;
}
