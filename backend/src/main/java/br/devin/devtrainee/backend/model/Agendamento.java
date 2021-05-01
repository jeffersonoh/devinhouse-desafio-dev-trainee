package br.devin.devtrainee.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="Agendamento_table")
public class Agendamento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Getter @Setter private Long idAgendamento;
	
	@OneToOne
	@JoinColumn(name = "idCliente")
	@Getter @Setter private Cliente cliente;
	
	@OneToOne
	@JoinColumn(name = "idExame")
	@Getter @Setter private Exame exame;
	
	@Getter @Setter private String data;
	@Getter @Setter private String hora;
	
	public Agendamento() {
	}
	
	public Agendamento(Cliente cliente, Exame exame, String data, String hora) {
		this.cliente = cliente;
		this.exame = exame;
		this.data=data;
		this.hora=hora;
	}
}
