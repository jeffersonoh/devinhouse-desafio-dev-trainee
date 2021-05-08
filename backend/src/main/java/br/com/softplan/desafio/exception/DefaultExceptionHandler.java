package br.com.softplan.desafio.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

import static org.springframework.http.HttpStatus.*;

@ControllerAdvice
public class DefaultExceptionHandler {

    @ExceptionHandler(value = { NotFoundException.class })
    protected ResponseEntity<Object> handleNotFoundException(NotFoundException exception, WebRequest request) {

        ExceptionResponse response = new ExceptionResponse(LocalDateTime.now(), NOT_FOUND, exception.getMessage(), ((ServletWebRequest)request).getRequest().getRequestURI());

        return new ResponseEntity<>(response, NOT_FOUND);

    }


    @ExceptionHandler(value = { CpfExistente.class })
    protected ResponseEntity<Object> handleCpfExistente(CpfExistente exception, WebRequest request) {

        ExceptionResponse response = new ExceptionResponse(LocalDateTime.now(), CONFLICT, exception.getMessage(), ((ServletWebRequest)request).getRequest().getRequestURI());

        return new ResponseEntity<>(response, CONFLICT);
    }


    @ExceptionHandler(value = { DataInvalidaException.class })
    protected ResponseEntity<Object> handleDataInvalidaException(DataInvalidaException exception, WebRequest request) {

        ExceptionResponse response = new ExceptionResponse(LocalDateTime.now(), BAD_REQUEST, exception.getMessage(), ((ServletWebRequest)request).getRequest().getRequestURI());

        return new ResponseEntity<>(response, BAD_REQUEST);
    }


    @ExceptionHandler(value = { CampoInvalidoException.class })
    protected ResponseEntity<Object> handleCampoInvalidoException(CampoInvalidoException exception, WebRequest request) {

        ExceptionResponse response = new ExceptionResponse(LocalDateTime.now(), BAD_REQUEST, exception.getMessage(), ((ServletWebRequest)request).getRequest().getRequestURI());

        return new ResponseEntity<>(response, BAD_REQUEST);
    }


    @ExceptionHandler(value = { RuntimeException.class })
    protected ResponseEntity<Object> handleRuntimeException(RuntimeException exception, WebRequest request) {

        ExceptionResponse response = new ExceptionResponse(LocalDateTime.now(), BAD_GATEWAY, "Ocorreu um erro ao processar a solicitação: " + exception.getMessage(), ((ServletWebRequest)request).getRequest().getRequestURI());

        return new ResponseEntity<>(response, BAD_GATEWAY);
    }

}
