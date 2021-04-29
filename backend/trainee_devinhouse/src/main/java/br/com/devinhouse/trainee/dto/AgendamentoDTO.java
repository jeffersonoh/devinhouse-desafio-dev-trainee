package br.com.devinhouse.trainee.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import br.com.devinhouse.trainee.entities.Agendamento;
import br.com.devinhouse.trainee.entities.Cliente;
import br.com.devinhouse.trainee.entities.Exame;

public class AgendamentoDTO {
	
	private int id;
	private Cliente cliente;
	private Exame exame;
	private LocalDate data;
	private LocalDateTime horarioInicio;
	private LocalDateTime horarioTermino;
	
	public AgendamentoDTO() {
		
	}
	
	public AgendamentoDTO(Agendamento agendamento) {
		this.cliente = agendamento.getCliente();
		this.exame = agendamento.getExame();
		this.data = agendamento.getData();
		this.horarioInicio =  agendamento.getHorarioInicio();
		this.horarioTermino = agendamento.getHorarioTermino();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public LocalDateTime getHorarioInicio() {
		return horarioInicio;
	}
	
	public LocalDate data() {
		return data;
	}

	public void setDataAgendamento(LocalDate data) {
		this.data = data;
	}

	public void setHorarioInicio(LocalDateTime horarioInicio) {
		this.horarioInicio = horarioInicio;
	}

	public LocalDateTime getHorarioTermino() {
		return horarioTermino;
	}

	public void setHorarioTermino(LocalDateTime horarioTermino) {
		this.horarioTermino = horarioTermino;
	}
}
