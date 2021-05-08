package br.com.izy.exception;

public class ClienteNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -3768564138392687075L;

	public ClienteNotFoundException(String message) {
		super(message);
	}

}
