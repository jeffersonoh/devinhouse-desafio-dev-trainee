package br.com.softplan.devtrainee.dto;

import java.io.Serializable;


import br.com.softplan.devtrainee.entity.ClientEntity;

public class ClientDto implements Serializable{

	private static final long serialVersionUID = 741054569194247956L;
	
	private Long id;
	private String birth;
	private String name;
	private String cpf;
	
	
	public ClientDto() {
		
	}
	
	public ClientDto(Long id, String birth, String name, String cpf) {
		super();
		this.id = id;
		this.birth = birth;
		this.name = name;
		this.cpf = cpf;
	}
	
	public ClientDto(ClientEntity client) {
		this.id = client.getId();
		this.birth = client.getBirth();
		this.name = client.getName();
		this.cpf = client.getCpf();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
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
