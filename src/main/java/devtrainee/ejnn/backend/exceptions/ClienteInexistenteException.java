package devtrainee.ejnn.backend.exceptions;

public class ClienteInexistenteException extends RuntimeException {

    public ClienteInexistenteException() {
    }

    public ClienteInexistenteException(String message) {
	super(message);
    }
}
