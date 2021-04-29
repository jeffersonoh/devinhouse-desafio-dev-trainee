package br.com.devinhouse.trainee.dto;

import java.time.LocalDate;

import br.com.devinhouse.trainee.entities.Cliente;

public class ClienteDTO {

	private int id;
	private String nome;
	private String sobrenome;
	private String cpf;
	private LocalDate birthYear;
	
	public ClienteDTO() {
		
	}

	public ClienteDTO(Cliente obj) {
		this.nome = obj.getNome();
		this.sobrenome = obj.getSobrenome();
		this.cpf = obj.getCpf();
		this.birthYear = obj.getBirthYear();
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

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public LocalDate getBirthYear() {
		return birthYear;
	}

	public void setBirthYear(LocalDate birthYear) {
		this.birthYear = birthYear;
	}
	
}
