package br.com.softplan.desafiotreinee.dto;

public class AgendaDTO {

	private Integer dia;
	private Integer mes;
	private Integer ano;
	private Integer hora;
	private Integer min;
	private ClienteDTO cliente;
	private ExameDTO exame;
	
	public Integer getDia() {
		return dia;
	}
	public void setDia(Integer dia) {
		this.dia = dia;
	}
	public Integer getMes() {
		return mes;
	}
	public void setMes(Integer mes) {
		this.mes = mes;
	}
	public Integer getAno() {
		return ano;
	}
	public void setAno(Integer ano) {
		this.ano = ano;
	}
	public ClienteDTO getCliente() {
		return cliente;
	}
	public void setCliente(ClienteDTO cliente) {
		this.cliente = cliente;
	}
	public ExameDTO getExame() {
		return exame;
	}
	public void setExame(ExameDTO exame) {
		this.exame = exame;
	}
	public Integer getHora() {
		return hora;
	}
	public void setHora(Integer hora) {
		this.hora = hora;
	}
	public Integer getMin() {
		return min;
	}
	public void setMin(Integer min) {
		this.min = min;
	}
	
	
	
}
/*
Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados;
Deverá haver um endpoint para exclusão de um agendamento realizado;
*/