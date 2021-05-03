package devtrainee.ejnn.backend.controllers;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import org.springframework.http.ResponseEntity;
import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;
import static org.springframework.http.HttpStatus.FORBIDDEN;

import org.springframework.dao.DataIntegrityViolationException;
import devtrainee.ejnn.backend.exceptions.ClienteInexistenteException;
import devtrainee.ejnn.backend.exceptions.ForbiddenException;

@ControllerAdvice
public class GeneralControllerAdvice {

    @ExceptionHandler
    public ResponseEntity<String> handleDataIntegrityViolation(DataIntegrityViolationException e) {
	return new ResponseEntity<>(e.getMessage(), BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity<String> handleClienteInexistente(ClienteInexistenteException e) {
	return new ResponseEntity<>(e.getMessage(), NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<String> handleForbidden(ForbiddenException e) {
	return new ResponseEntity<>(e.getMessage(), FORBIDDEN);
    }
}
