package devtrainee.ejnn.backend.domain;

import lombok.Data;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;


@Data
@Entity
public class Cliente {
    @Id
    @GeneratedValue
    private long id;
    private String nome;
    private String sobrenome;
    private LocalDate dataDeNascimento;
    @Column(unique = true)
    private String cpf;
}
