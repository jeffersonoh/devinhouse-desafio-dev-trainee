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
	
	private String data;
	private String hora;
	
	public Agendamento() {
	}
	
	public Agendamento(Cliente cliente, Exame exame, String data, String hora) {
		this.cliente = cliente;
		this.exame = exame;
		this.data=data;
		this.hora=hora;
	}

	public Long getIdAgendamento() {
		return idAgendamento;
	}

	public void setIdAgendamento(Long idAgendamento) {
		this.idAgendamento = idAgendamento;
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

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}	
}
