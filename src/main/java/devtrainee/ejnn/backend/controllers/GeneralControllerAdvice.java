package devtrainee.ejnn.backend.controllers;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import org.springframework.http.ResponseEntity;
import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;

import org.springframework.dao.DataIntegrityViolationException;
import devtrainee.ejnn.backend.exceptions.ClienteInexistenteException;

@ControllerAdvice
public class GeneralControllerAdvice {

    @ExceptionHandler
    public ResponseEntity<String> handleConstraintViolation(DataIntegrityViolationException e) {
	return new ResponseEntity<>(e.getMessage(), BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity<String> handleFailedClientFindById(ClienteInexistenteException e) {
	return new ResponseEntity<>(e.getMessage(), NOT_FOUND);
    }
}
