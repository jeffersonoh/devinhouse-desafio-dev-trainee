package br.com.izy.dto;

import java.io.Serializable;

import br.com.izy.entity.Exame;

public class ExameDTOUpdate implements Serializable {

	private static final long serialVersionUID = 7762737242474661104L;
	
	private String nome;
	
	public ExameDTOUpdate() {
		
	}
	
	public ExameDTOUpdate(String nome) {
		this.nome = nome;
	}
	
	public ExameDTOUpdate(Exame exame) {
		this.nome = exame.getNome();
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}


}
