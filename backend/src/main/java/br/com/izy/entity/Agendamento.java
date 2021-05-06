package br.com.izy.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.izy.dto.AgendamentoDTOInput;
import br.com.izy.util.StringToLocalDateHandler;

@Entity
@Table(name = "agendamentos")
public class Agendamento implements Serializable {
	
	private static final long serialVersionUID = -3323402118170842052L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@JsonFormat(pattern="dd/MM/yyyy")
	private LocalDate data;
	@JsonFormat(pattern="HH:mm")
	private LocalTime horario;
	@ManyToOne
  @JoinColumn(name = "cliente_id", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
	private Cliente cliente;
	@ManyToOne
  @JoinColumn(name = "exame_id", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
	private Exame exame;
	
	public Agendamento() {
		
	}
	
	public Agendamento(LocalDate data, LocalTime horario, Cliente cliente, Exame exame) {
		this.data = data;
		this.horario = horario;
		this.cliente = cliente;
		this.exame = exame;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public LocalDate getData() {
		return data;
	}
	public void setData(LocalDate data) {
		this.data = data;
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
	public LocalTime getHorario() {
		return horario;
	}
	public void setHorario(LocalTime horario) {
		this.horario = horario;
	}
	
	public Agendamento converteAgendamentoDTO(AgendamentoDTOInput agendamentoDTO, Cliente cliente, Exame exame) {
		Agendamento result = new Agendamento(
			StringToLocalDateHandler.ConverteStringToLocalDate(agendamentoDTO.getData()),
			agendamentoDTO.getHorario(),
			cliente, exame
		);
		
		return result;
	}
	
}
