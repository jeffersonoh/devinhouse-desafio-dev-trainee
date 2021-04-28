package br.com.devinhouse.trainee.dto;

import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import br.com.devinhouse.trainee.entities.Cliente;

public class ClienteDTO {
	
	private int id;
	private String nome;
	private String sobrenome;
	private Long cpf;
	private String birthYear;
	
	public ClienteDTO() {
		
	}

	public ClienteDTO(Cliente obj) {
		this.nome = obj.getNome();
		this.sobrenome = obj.getSobrenome();
		this.cpf = obj.getCPF();
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

	public Long getCPF() {
		return cpf;
	}

	public void setCPF(Long cpf) {
		this.cpf = cpf;
	}

	public Date getBirthYear() {
		return birthYear;
	}

	public void setBirthYear(Date birthYear) {
		this.birthYear = birthYear;
	}
}
