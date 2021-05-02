package br.com.izy.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.izy.entity.Cliente;

public class ClienteDTO implements Serializable {

	private static final long serialVersionUID = -5917432598031376988L;
	
	private Long id;
	private String nome;
	private String cpf;
	@JsonFormat(pattern="dd/MM/yyyy")
	private LocalDate dataNascimento;
	
	
	public ClienteDTO() {
		
	}
	
	public ClienteDTO(Long id, String nome, String cpf, LocalDate dataNascimento) {
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
	}
	
	public ClienteDTO(Cliente cliente) {
		this.id = cliente.getId();
		this.nome = cliente.getNome();
		this.cpf = cliente.getCpf();
		this.dataNascimento = cliente.getDataNascimento();
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
