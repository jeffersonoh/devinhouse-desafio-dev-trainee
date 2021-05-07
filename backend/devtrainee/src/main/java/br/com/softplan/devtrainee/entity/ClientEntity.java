package br.com.softplan.devtrainee.entity;

//import static javax.persistence.CascadeType.ALL;

import java.io.Serializable;
//import java.util.List;
import java.time.LocalDate;

import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.softplan.devtrainee.dto.ClientDto;

@Entity(name = "clients")
@Table(name = "CLIENTS", uniqueConstraints = @UniqueConstraint(columnNames = { "cpf" }))
public class ClientEntity implements Serializable {

	private static final long serialVersionUID = -5715156494272798188L;

	private String name;
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate birth;
	
	// Não poderá ser cadastrado mais de um cliente para o mesmo CPF;
	@Id
	private String cpf;

	public ClientEntity() {

	}

	public ClientEntity(ClientDto client) {
		this.name = client.getName();
		this.birth = client.getBirth();
		this.cpf = client.getCpf();
	}

	public ClientEntity(String name, LocalDate birth, String cpf) {
		super();
		this.name = name;
		this.birth = birth;
		this.cpf = cpf;
	}

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

	public ClientEntity converterDto(ClientDto client) {
		ClientEntity result = new ClientEntity(client.getName(), client.getBirth(), client.getCpf());
		return result;
	}

}
