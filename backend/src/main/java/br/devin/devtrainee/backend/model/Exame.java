package br.devin.devtrainee.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="exame_table")
public class Exame {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idExame;
	private String nome;
	
	public Exame() {
	}
	
	public Exame(String nome) {
		this.nome=nome;
	}

	public Long getIdExame() {
		return idExame;
	}

	public void setIdExame(Long idExame) {
		this.idExame = idExame;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
