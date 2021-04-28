package br.com.devinhouse.spring.trabalhospringboot.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class ExamesDTO {

    @Id
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String nome;

    public static ExamesDTO converter(ExamesDTO e){
        var exame = new ExamesDTO();

        exame.setId(e.getId());
        exame.setNome(e.getNome());

        return exame;
    }
}
