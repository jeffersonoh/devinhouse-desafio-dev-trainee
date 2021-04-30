package br.com.avaliacao.softplan.backend.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
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
	private String horario;
	
	
	public Long getIdAgendamento() {
		return idAgendamento;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente clienteTable) {
		this.cliente = clienteTable;
	}

	public Exame getExame() {
		return exame;
	}

	public void setExame(Exame exameTable) {
		this.exame = exameTable;
	}

	public String getData() {
		return data;
	}
	
	public void setData(String data) {
		this.data = data;
	}
	
	public String getHorario() {
		return horario;
	}
	
	public void setHorario(String horario) {
		this.horario = horario;
	}
	
	
}
