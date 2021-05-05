package br.com.izy.dto;

import java.io.Serializable;

import br.com.izy.entity.Exame;

public class ExameDTOInput implements Serializable {

	private static final long serialVersionUID = 7762737242474661104L;
	
	private String nome;
	
	public ExameDTOInput() {
		
	}
	
	public ExameDTOInput(String nome) {
		this.nome = nome;
	}
	
	public ExameDTOInput(Exame exame) {
		this.nome = exame.getNome();
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}

}
