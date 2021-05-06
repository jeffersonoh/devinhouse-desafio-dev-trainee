package br.com.izy.exception;

public class AgendamentoNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 9207311472657924226L;
	
	public AgendamentoNotFoundException(String message) {
		super(message);
	}

}
