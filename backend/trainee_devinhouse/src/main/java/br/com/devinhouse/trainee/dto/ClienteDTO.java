package br.com.devinhouse.trainee.dto;

import java.time.LocalDate;

import br.com.devinhouse.trainee.entities.Cliente;

public class ClienteDTO {

	private int id;
	private String nome;
	private String sobrenome;
	private Long cpf;
	private LocalDate birthYear;
	
	public ClienteDTO() {
		
	}

	public ClienteDTO(Cliente cliente) {
		this.nome = cliente.getNome();
		this.sobrenome = cliente.getSobrenome();
		this.cpf = cliente.getCPF();
		this.birthYear = cliente.getBirthYear();
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

	public Long getCPF() {
		return cpf;
	}

	public void setCPF(Long cpf) {
		this.cpf = cpf;
	}

	public LocalDate getBirthYear() {
		return birthYear;
	}

	public void setBirthYear(LocalDate birthYear) {
		this.birthYear = birthYear;
	}
}
