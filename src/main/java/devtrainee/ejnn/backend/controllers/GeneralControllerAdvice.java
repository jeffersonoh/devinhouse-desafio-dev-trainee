package devtrainee.ejnn.backend.controllers;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import org.springframework.http.ResponseEntity;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

import org.springframework.dao.DataIntegrityViolationException;

@ControllerAdvice
public class GeneralControllerAdvice {

    @ExceptionHandler
    public ResponseEntity<String> handleConstraintViolation(DataIntegrityViolationException e) {
	return new ResponseEntity<>(e.getMessage(), BAD_REQUEST);
    }
}
