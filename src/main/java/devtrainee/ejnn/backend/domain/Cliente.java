package devtrainee.ejnn.backend.domain;

import lombok.Data;

import java.util.List;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import static javax.persistence.CascadeType.ALL;
import static javax.persistence.GenerationType.IDENTITY;

import devtrainee.ejnn.backend.domain.Agendamento;


@Data
@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private long id;
    private String nome;
    private String sobrenome;
    private LocalDate dataDeNascimento;
    @Column(unique = true)
    private String cpf;
    @OneToMany(mappedBy = "cliente",
	       cascade =  ALL)
    private List<Agendamento> agendamentos;
}
