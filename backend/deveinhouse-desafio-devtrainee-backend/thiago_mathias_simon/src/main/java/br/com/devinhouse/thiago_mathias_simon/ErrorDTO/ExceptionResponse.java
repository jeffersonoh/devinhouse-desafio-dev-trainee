package br.com.devinhouse.thiago_mathias_simon.ErrorDTO;

import java.time.Instant;
import java.util.Date;

public class ExceptionResponse {
	private String httpCodeMessage;
	private String detalhes;
	private String mensagem;
	private Instant timestamp;

	public ExceptionResponse(String message, String details, String httpCodeMessage) {
		super();
		this.httpCodeMessage = httpCodeMessage;
		this.detalhes = details;
		this.mensagem = message;
		this.timestamp = Instant.now();
	}

	public String getHttpCodeMessage() {
		return httpCodeMessage;
	}

	public Instant getTimestamp() {
		return timestamp;
	}

	public String getMensagem() {
		return mensagem;
	}

	public String getDetalhes() {
		return detalhes;
	}
}
