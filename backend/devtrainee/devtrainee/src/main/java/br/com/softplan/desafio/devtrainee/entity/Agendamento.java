package br.com.softplan.desafio.devtrainee.entity;

import br.com.softplan.desafio.devtrainee.dto.AgendamentoDTO;
import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "agendamento")
public class Agendamento implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id;
    @OneToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
    @OneToOne
    @JoinColumn(name = "exame_id")
    private Exame exame;

    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    private LocalDateTime dataEHoraDoAgendamento;

    public LocalDateTime getDataEHoraDoAgendamento() {
		return dataEHoraDoAgendamento;
	}

	public void setDataEHoraDoAgendamento(LocalDateTime dataEHoraDoAgendamento) {
		this.dataEHoraDoAgendamento = dataEHoraDoAgendamento;
	}

	public Agendamento() {
    }

    public Agendamento(Cliente cliente, Exame exame) {
        this.cliente = cliente;
        this.exame = exame;
    }

    public Agendamento(Long id, Cliente cliente, Exame exame) {
        this.id = id;
        this.cliente = cliente;
        this.exame = exame;
    }

    public Agendamento(Cliente cliente, Exame exame, LocalDateTime dataEHoraDoAgendamento) {
        this.cliente = cliente;
        this.exame = exame;
        this.dataEHoraDoAgendamento = dataEHoraDoAgendamento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Exame getExame() {
        return exame;
    }

    public void setExame(Exame exame) {
        this.exame = exame;
    }
//
//    public Agendamento toDTO(AgendamentoDTO agendamentoDTO) {
//          Agendamento res = new AgendamentoDTO(agendamentoDTO.getCliente(),agendamentoDTO.getExame());
//          return res;
//    }

    @Override
    public String toString() {
        return "Agendamento{" +
                "id=" + id +
                ", cliente=" + cliente +
                ", exame=" + exame +
                '}';
    }
}
