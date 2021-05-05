package br.com.devinhouse.thiago_mathias_simon.exceptions;

public class PatientNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 2061429553440600761L;

	public PatientNotFoundException(String message) {
		super(message);
	}

}
