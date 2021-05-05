package br.com.softplan.desafiotreinee.dto;

public class AgendaDTO {

	private int id;
	private Integer dia;
	private Integer mes;
	private Integer ano;
	private Integer hora;
	private Integer min;
	private ClienteDTO cliente;
	private ExameDTO exame;

	public AgendaDTO(int id, Integer dia, Integer mes, Integer ano, Integer hora, Integer min, ClienteDTO cliente,ExameDTO exame ) {
		this.id = id;
		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
		this.hora = hora;
		this.min = min;
		this.cliente = cliente;
		this.exame = exame;
	}

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
		if (mes >= 5 && mes <= 6) {
			this.mes = mes;
		}
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getAno() {
		return ano;
	}

	public void setAno(Integer ano) {
		if (ano >= 2021 && ano <= 2021) {
			this.ano = ano;
		}
	}

	public String getCliente() {
		return cliente.getCpf();
	}

	public int getExame() {
		return exame.getId();
	}

	public void setExame(ExameDTO exame) {
		this.exame = exame;
	}

	public Integer getHora() {
		return hora;
	}

	public void setHora(Integer hora) {
		if (hora >= 0 && hora <= 23) {
			this.hora = hora;
		}
	}

	public Integer getMin() {
		return min;
	}

	public void setMin(Integer min) {
		if (min >= 0 && min <= 60) {
			this.min = min;
		}
	}

}
/*
 * Deverá haver um endpoint para edição de um agendamento realizado, apenas dia
 * e hora poderão ser editados; Deverá haver um endpoint para exclusão de um
 * agendamento realizado;
 */