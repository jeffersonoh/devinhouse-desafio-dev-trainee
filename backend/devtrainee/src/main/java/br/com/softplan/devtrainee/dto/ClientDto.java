package br.com.softplan.devtrainee.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.softplan.devtrainee.entity.ClientEntity;

public class ClientDto implements Serializable{

	private static final long serialVersionUID = 741054569194247956L;
	
	//private Long id;
	private String name;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate birth;
	private String cpf;
	
	
	public ClientDto() {
		
	}
	
//	public ClientDto(Long id, LocalDate birth, String name, String cpf) {
//		super();
//		this.id = id;
//		this.birth = birth;
//		this.name = name;
//		this.cpf = cpf;
//	}
	
	public ClientDto(ClientEntity client) {
		//this.id = client.getId();
		this.name = client.getName();
		this.birth = client.getBirth();
		this.cpf = client.getCpf();
	}

//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}

	public LocalDate getBirth() {
		return birth;
	}

	public void setBirth(LocalDate birth) {
		this.birth = birth;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	

}
