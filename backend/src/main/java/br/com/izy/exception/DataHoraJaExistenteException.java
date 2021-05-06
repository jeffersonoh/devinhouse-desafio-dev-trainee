package br.com.izy.exception;

public class DataHoraJaExistenteException extends RuntimeException {

	private static final long serialVersionUID = 8882243344882672021L;

	public DataHoraJaExistenteException(String message) {
		super(message);
	}

}
