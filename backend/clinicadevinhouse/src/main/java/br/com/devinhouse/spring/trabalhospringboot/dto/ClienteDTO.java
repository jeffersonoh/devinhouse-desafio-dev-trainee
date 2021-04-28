package br.com.devinhouse.spring.trabalhospringboot.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class ClienteDTO {

    @Id
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(nullable = false)
    private String nome;
    @Column(nullable = false)
    private String cpf;
    @Column(nullable = false)
    private LocalDate ddn;
    
    public static ClienteDTO converter(ClienteDTO c){
        var cliente = new ClienteDTO();

        cliente.setId(c.getId());
        cliente.setNome(c.getNome());
        cliente.setCpf(c.getCpf());
        cliente.setDdn(c.getDdn());

        return cliente;
    }
}
