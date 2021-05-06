package br.com.izy.exception;

public class CpfJaExistenteException extends RuntimeException {

	private static final long serialVersionUID = -4435672299977840546L;

	public CpfJaExistenteException(String message) {
		super(message);
	}

}
