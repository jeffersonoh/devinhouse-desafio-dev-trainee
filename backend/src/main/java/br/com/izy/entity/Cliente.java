package br.com.izy.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.br.CPF;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.izy.dto.ClienteDTO;

@Entity
@Table(
		name = "clientes",
		uniqueConstraints=
    @UniqueConstraint(columnNames={"cpf"})
)
public class Cliente implements Serializable {

	private static final long serialVersionUID = 3776544642597429154L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	@CPF
	@NotNull(message = "CPF não pode ser nulo")
	private String cpf;
	@JsonFormat(pattern="dd/MM/yyyy")
	private LocalDate dataNascimento;
	
	public Cliente() {
		
	}
	
	public Cliente(Long id, String nome, String cpf, LocalDate dataNascimento) {
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
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
	public LocalDate getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	public Cliente converteClienteDTO(ClienteDTO clienteDTO) {
		Cliente result = new Cliente(clienteDTO.getId(), clienteDTO.getNome(), clienteDTO.getCpf(), clienteDTO.getDataNascimento());
		
		return result;
	}
	
}
