package br.devin.devtrainee.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Agendamento_table")
public class Agendamento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idAgendamento;
	
	@OneToOne
	@JoinColumn(name = "idCliente")
	private Cliente cliente;
	
	@OneToOne
	@JoinColumn(name = "idExame")
	private Exame exame;
	
	private String dia;
	private String hora;
	
	public Agendamento() {
	}
	
	public Agendamento(Cliente cliente, Exame exame, String dia, String hora) {
		this.cliente = cliente;
		this.exame = exame;
		this.dia=dia;
		this.hora=hora;
	}

	public Long getIdgendamento() {
		return idAgendamento;
	}

	public void setId(Long idAgendamento) {
		this.idAgendamento = idAgendamento;
	}

	public String getDia() {
		return dia;
	}

	public void setDia(String dia) {
		this.dia = dia;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}
}
