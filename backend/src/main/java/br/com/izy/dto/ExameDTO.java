package br.com.izy.dto;

import java.io.Serializable;

import br.com.izy.entity.Exame;

public class ExameDTO implements Serializable {

	private static final long serialVersionUID = 7762737242474661104L;
	
	private Long id;
	private String nome;
	
	public ExameDTO() {
		
	}
	
	public ExameDTO(Long id, String nome) {
		this.id = id;
		this.nome = nome;
	}
	
	public ExameDTO(Exame exame) {
		this.id = exame.getId();
		this.nome = exame.getNome();
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

}
