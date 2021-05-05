package br.com.devinhouse.thiago_mathias_simon.dto;

import java.util.Date;
import java.util.GregorianCalendar;

public class ProcessoCriadoDTO {

	private long id;
	private String chaveProcesso;
	private Date timestamp = new GregorianCalendar().getTime();

	public long getId() {
		return id;
	}

	public void setId(long l) {
		this.id = l;
	}

	public String getChaveProcesso() {
		return chaveProcesso;
	}

	public void setChaveProcesso(String chaveProcesso) {
		this.chaveProcesso = chaveProcesso;
	}

	public Date getTimestamp() {
		return this.timestamp;
	}

}
