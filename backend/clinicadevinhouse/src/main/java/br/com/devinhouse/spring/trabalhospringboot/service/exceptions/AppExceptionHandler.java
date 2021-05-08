package br.com.devinhouse.spring.trabalhospringboot.service.exceptions;

import java.time.Instant;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import br.com.devinhouse.spring.trabalhospringboot.resource.exceptions.ErrorMessage;
import br.com.devinhouse.spring.trabalhospringboot.resource.exceptions.StandardError;


@ControllerAdvice
public class AppExceptionHandler extends ResponseEntityExceptionHandler {
    
    @ExceptionHandler(value={Exception.class})
    public ResponseEntity<Object> handleAnyExceptions(Exception e, WebRequest request){
        String descricaoErro = e.getLocalizedMessage();
        if (descricaoErro == null) {descricaoErro = e.toString();}

        ErrorMessage errorMesssage = new ErrorMessage(new Date(), descricaoErro);
        return new ResponseEntity<>(errorMesssage, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<StandardError> entityNotFound(EntityNotFoundException e, 
                                                        HttpServletRequest request){
        StandardError err = new StandardError();
        err.setTimestamp(Instant.now());
        err.setStatus(HttpStatus.NOT_FOUND.value());
        err.setError("Resource not found");
        err.setMessage(e.getMessage());
        err.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

    @ExceptionHandler(MethodNotFoundException.class)
    public ResponseEntity<StandardError> entityNotFound(MethodNotFoundException e, 
                                                        HttpServletRequest request){
        StandardError err = new StandardError();
        err.setTimestamp(Instant.now());
        err.setStatus(HttpStatus.HTTP_VERSION_NOT_SUPPORTED.value());
        err.setError("Method not implemented");
        err.setMessage(e.getMessage());
        err.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.HTTP_VERSION_NOT_SUPPORTED).body(err);
    }
}
