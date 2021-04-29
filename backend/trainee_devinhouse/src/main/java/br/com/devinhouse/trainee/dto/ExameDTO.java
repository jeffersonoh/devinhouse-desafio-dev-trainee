package br.com.devinhouse.trainee.dto;

import br.com.devinhouse.trainee.entities.Exame;

public class ExameDTO {

	private int id;
	private String nome;

	public ExameDTO() {
		
	}
	
	public ExameDTO(Exame exame) {
		this.nome = exame.getNome();
	}	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
