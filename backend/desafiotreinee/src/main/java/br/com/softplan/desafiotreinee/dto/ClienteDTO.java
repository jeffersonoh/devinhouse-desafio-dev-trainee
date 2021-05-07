package br.com.softplan.desafiotreinee.dto;

public class ClienteDTO {

	private Integer id;
	private String cpf;
	private String nome;
	private String sobrenome;
	private String dataNascimento;

	public ClienteDTO() {
	}

	public ClienteDTO(Integer id, String cpf, String nome, String sobrenome, String dataNascimento) {
		this.id = id;
		this.cpf = cpf;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.dataNascimento = dataNascimento;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		int limite = 11;
		if (cpf != null && cpf.length() == limite) {
			this.cpf = cpf;
		} else {
			System.out.println("CPF Inválido");
		}

	}

}