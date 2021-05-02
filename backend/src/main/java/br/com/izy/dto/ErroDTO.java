package br.com.izy.dto;

import java.io.Serializable;
import java.util.Date;

public class ErroDTO implements Serializable {

	private static final long serialVersionUID = -6044250241951563537L;
	
	private Date data;
	private String mensagem;
	private Integer statusCode;

	public ErroDTO() {}
	
	public ErroDTO(Date data, String mensagem, Integer statusCode) {
		this.data = data;
		this.mensagem = mensagem;
		this.statusCode = statusCode;
	}
	
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}
	public String getMensagem() {
		return mensagem;
	}
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	public Integer getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}
}
