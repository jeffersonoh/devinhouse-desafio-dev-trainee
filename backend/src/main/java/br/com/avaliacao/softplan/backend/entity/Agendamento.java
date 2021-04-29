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
	//dia, hora, cpf(fk), id(fk)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idAgendamento;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "idCliente", nullable = true)
	private Cliente clienteTable;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "idExame", nullable = true)
	private Exame exameTable;
	
	private String data;
	private String horario;
	
	
	
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
		return data;
	}
	
	public void setDia(String dia) {
		this.data = dia;
	}
	
	public String getHora() {
		return horario;
	}
	
	public void setHora(String hora) {
		this.horario = hora;
	}
	
	
}
