package br.com.softplan.devtrainee.entity;

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import br.com.softplan.devtrainee.dto.ClientDto;

@Entity(name = "clients")
@Table(
		name="CLIENTS", 
	    uniqueConstraints=
	        @UniqueConstraint(columnNames={"id","cpf"})
	)
public class ClientEntity implements Serializable{

	private static final long serialVersionUID = -5715156494272798188L;
//	O cadastro de cliente deverá ter os campos: Nome, CPF e Data de Nascimento;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String birth;
	private String name;
	private String cpf;
	
	
	public ClientEntity() {
		
	}
	
	public ClientEntity(Long id, String birth, String name, String cpf) {
		super();
		this.id = id;
		this.birth = birth;
		this.name = name;
		this.cpf = cpf;
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
	
	public ClientEntity converterDto(ClientDto client) {
	ClientEntity result = new ClientEntity(client.getId(), client.getBirth(), client.getName(), client.getCpf());
	
	return result;
}
	
	
	

}
