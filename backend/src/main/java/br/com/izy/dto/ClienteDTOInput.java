package br.com.izy.dto;

import java.io.Serializable;
import java.time.LocalDate;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.br.CPF;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ClienteDTOInput implements Serializable {

	private static final long serialVersionUID = -5917432598031376988L;
	
	@NotNull
	private String nome;
	@NotNull
	@CPF
	private String cpf;
	@NotNull
	@JsonFormat(pattern="dd/MM/yyyy")
	private LocalDate dataNascimento;
	
	public ClienteDTOInput() {
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public LocalDate getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	
}
