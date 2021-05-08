package br.com.devtrainee.springboot.dto;

import java.util.Calendar;

public class AgendamentoDTO {

	private Integer id;
	private Calendar dataHora;
	private ExamesDTO exame;
	private ClienteDTO cliente;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Calendar getDataHora() {
		return dataHora;
	}
	public void setDataHora(Calendar dataHora) {
		this.dataHora = dataHora;
	}
	public ExamesDTO getExame() {
		return exame;
	}
	public void setExame(ExamesDTO exame) {
		this.exame = exame;
	}
	public ClienteDTO getCliente() {
		return cliente;
	}
	public void setCliente(ClienteDTO cliente) {
		this.cliente = cliente;
	}
	
}
