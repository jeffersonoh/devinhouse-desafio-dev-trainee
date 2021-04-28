package br.com.avaliacao.softplan.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Exame {
	//id, nome do exame
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idExame;
	private String nome;
	
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
