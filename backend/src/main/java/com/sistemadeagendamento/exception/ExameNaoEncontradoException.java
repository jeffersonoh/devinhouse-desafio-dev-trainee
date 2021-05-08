package com.sistemadeagendamento.exception;

import org.springframework.http.HttpStatus;

public class ExameNaoEncontradoException extends RuntimeException{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ExameNaoEncontradoException(HttpStatus status, String message) {
		super(message);
	}
};

