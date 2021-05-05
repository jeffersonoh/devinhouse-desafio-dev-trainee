package br.com.softplan.desafiotreinee.dto;

public class ClienteDTO {

	private static final long serialVersionUID = 7887343820631112092L;

	private String cpf;

	private String nome;
	private String sobrenome;
	private String dataNascimento;

	public ClienteDTO() {
	}

	public ClienteDTO(String cpf, String nome, String sobrenome, String dataNascimento) {
		this.cpf = cpf;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.dataNascimento = dataNascimento;
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
/*
 * public String limitaString(String testes, int tamanho){ if(testes != null &&
 * testes.length() > tamanho){ return testes.substring(0, tamanho+1) + "..."; }
 * else { return testes; } }
 */