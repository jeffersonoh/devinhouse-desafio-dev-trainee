package br.com.izy.dto;

import java.io.Serializable;

public class ClienteDTOUpdate implements Serializable {

	private static final long serialVersionUID = -5917432598031376988L;
	
	private String nome;
	private String dataNascimento;
	
	public ClienteDTOUpdate() {
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	
}
