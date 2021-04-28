package br.com.devinhouse.trainee.dto;

import java.time.LocalDateTime;

import br.com.devinhouse.trainee.entities.Agendamento;
import br.com.devinhouse.trainee.entities.Cliente;
import br.com.devinhouse.trainee.entities.Exame;

public class AgendamentoDTO {

	private int id;
	private Cliente cliente;
	private Exame exame;
	private LocalDateTime horarioInicio;
	private LocalDateTime horarioTermino;
	
	public AgendamentoDTO() {
		
	}
	
	public AgendamentoDTO(Agendamento obj) {
		this.cliente = obj.getCliente();
		this.exame = obj.getExame();
		this.horarioInicio = obj.getHorarioInicio();
		this.horarioTermino = obj.getHorarioTermino();
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
