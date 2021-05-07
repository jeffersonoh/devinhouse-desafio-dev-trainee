package br.com.softplan.desafiotreinee.dto;

public class AgendaDTO {

	private Integer id;
	private String cpfCliente;
	private String nomeExame;
	private String dataAgendada;
	private String horaAgendada;

	public AgendaDTO() {
	}

	public AgendaDTO(Integer id, String cpfCliente, String nomeExame, String dataAgendada, String horaAgendada) {
		this.id = id;
		this.cpfCliente = cpfCliente;
		this.nomeExame = nomeExame;
		this.dataAgendada = dataAgendada;
		this.horaAgendada = horaAgendada;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCpfCliente() {
		return cpfCliente;
	}

	public void setCpfCliente(String cpfCliente) {
		this.cpfCliente = cpfCliente;
	}

	public String getNomeExame() {
		return nomeExame;
	}

	public void setNomeExame(String nomeExame) {
		this.nomeExame = nomeExame;
	}

	public String getDataAgendada() {
		return dataAgendada;
	}

	public void setDataAgendada(String dataAgendada) {
		this.dataAgendada = dataAgendada;
	}

	public String getHoraAgendada() {
		return horaAgendada;
	}

	public void setHoraAgendada(String horaAgendada) {
		this.horaAgendada = horaAgendada;
	}

}
