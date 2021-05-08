package br.com.softplan.desafio.devtrainee.entity;

import br.com.softplan.desafio.devtrainee.dto.ExameDTO;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "exame")
public class Exame implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    @Column(nullable = false)
    private String nomeDoExame;

    public Exame() {
    }

    public Exame(Long id, String nomeDoExame) {
        this.id = id;
        this.nomeDoExame = nomeDoExame;
    }

    public Exame(String nomeDoExame) {
        this.nomeDoExame = nomeDoExame;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeDoExame() {
        return nomeDoExame;
    }

    public void setNomeDoExame(String nomeDoExame) {
        this.nomeDoExame = nomeDoExame;
    }

    public Exame toDTO(ExameDTO exameDTO) {
        Exame result = new Exame(exameDTO.getId(), exameDTO.getNomeDoExame());
        return result;
    }

    @Override
    public String toString() {
        return "Exame{" +
                "id=" + id +
                ", nomeDoExame='" + nomeDoExame + '\'' +
                '}';
    }
}
