package com.sistemadeagendamento.exception;

import org.springframework.http.HttpStatus;

public class ClienteNaoEncontradoException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public ClienteNaoEncontradoException (HttpStatus status, String message){
		super (message);
	}

}
