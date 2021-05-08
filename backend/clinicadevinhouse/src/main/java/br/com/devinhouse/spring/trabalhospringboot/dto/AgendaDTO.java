package br.com.devinhouse.spring.trabalhospringboot.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class AgendaDTO {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private LocalDate data;
    @Column(nullable = false)
    private LocalTime hora;
    @Column(nullable = false)
    private String exame;
    @Column(nullable = false)
    private String pacienteNome;
    @Column(nullable = false)
    private String cpf;

    public static AgendaDTO converter(AgendaDTO a){
        var agenda = new AgendaDTO();

        agenda.setId(a.getId());
        agenda.setData(a.getData());
        agenda.setHora(a.getHora());
        agenda.setExame(a.getExame());
        agenda.setPacienteNome(a.getPacienteNome());
        agenda.setCpf(a.getCpf());

        return agenda;
    }
}
