package br.devin.devtrainee.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="cliente_table")
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Getter @Setter private Long idCliente;
	
	@Column(unique=true)
	@Getter @Setter private String cPF;
	@Getter @Setter private String nome;
	@Getter @Setter private String dataDeNascimento;
	
	public Cliente() {
	}
	
	public Cliente(String cPF, String nome, String dataDeNascimento) {
		this.cPF = cPF;
		this.nome = nome;
		this.dataDeNascimento =dataDeNascimento; 
	}
}
