package br.com.avaliacao.softplan.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Agendamento {
	//dia, hora, cpf(fk), id(fk)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idAgendamento;
	
	@OneToOne
	@JoinColumn(name = "idCliente(fk)")
	private Cliente clienteTable;
	
	@OneToOne
	@JoinColumn(name = "idExame(fk)")
	private Exame exameTable;
	
	private String dia;
	private String hora;
	
	
	
	public Long getIdAgendamento() {
		return idAgendamento;
	}

	public void setIdAgendamento(Long idAgendamento) {
		this.idAgendamento = idAgendamento;
	}

	public Cliente getClienteTable() {
		return clienteTable;
	}

	public void setClienteTable(Cliente clienteTable) {
		this.clienteTable = clienteTable;
	}

	public Exame getExameTable() {
		return exameTable;
	}

	public void setExameTable(Exame exameTable) {
		this.exameTable = exameTable;
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
