package br.com.devtrainee.springboot.dto;

import java.util.Calendar;

public class ClienteDTO {
	
	private Integer id;
	private String nome;
	private String CPF;
	private Calendar dataNascimento;
	

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getCPF() {
		return CPF;
	}
	public void setCPF(String cpf) {
		this.CPF = cpf;
	}
	
	public Calendar getDataNascimento() {
		return dataNascimento;
	}
	public void setDataDeNascimento(Calendar dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	
	
}
