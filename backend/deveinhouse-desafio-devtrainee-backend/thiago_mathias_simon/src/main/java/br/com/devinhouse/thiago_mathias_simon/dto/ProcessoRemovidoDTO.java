package br.com.devinhouse.thiago_mathias_simon.dto;

import java.util.Date;
import java.util.GregorianCalendar;

public class ProcessoRemovidoDTO {

	private long id;
	private String mensagem;
	private Date timestamp = new GregorianCalendar().getTime();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

}
