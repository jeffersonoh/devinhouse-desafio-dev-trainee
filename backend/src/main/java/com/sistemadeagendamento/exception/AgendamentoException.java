package com.sistemadeagendamento.exception;

import org.springframework.http.HttpStatus;

public class AgendamentoException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public AgendamentoException(HttpStatus status, String message) {
		super(message);
	}
	
}
