package br.com.devinhouse.trainee.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Agendamento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	
	@OneToOne
	private Cliente cliente;
	
	@OneToOne
	private Exame exame;
	
	private LocalDateTime horarioInicio;
	
	private LocalDateTime horarioTermino;
	
	public Agendamento() {
		
	}
	
	public Agendamento(Cliente cliente, Exame exame, LocalDateTime horarioInicio, LocalDateTime horarioTermino) {
		this.cliente = cliente;
		this.exame = exame;
		this.horarioInicio =  horarioInicio;
		this.horarioTermino = horarioTermino;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Agendamento other = (Agendamento) obj;
		if (id != other.id)
			return false;
		return true;
	}
		
}
