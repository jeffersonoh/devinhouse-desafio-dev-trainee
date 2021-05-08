package br.com.devinhouse.thiago_mathias_simon.exceptions;

public class InvalidPatientNameException extends RuntimeException{

    private static final long serialVersionUID = 2061429553440600761L;

    public InvalidPatientNameException(String message) {
        super((message));
    }
}
