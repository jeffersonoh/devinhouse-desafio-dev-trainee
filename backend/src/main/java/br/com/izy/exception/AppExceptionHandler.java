package br.com.izy.exception;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import br.com.izy.dto.ErroDTO;

@ControllerAdvice
public class AppExceptionHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(ClienteNotFoundException.class)
	public ResponseEntity<Object> handleClienteNotFoundException(ClienteNotFoundException ex, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), "Nenhum cliente encontrado", 404);
		
		return ResponseEntity.status(404).body(erroDTO);
	}
	
	@ExceptionHandler(ExameNotFoundException.class)
	public ResponseEntity<Object> handleExameNotFoundException(ExameNotFoundException ex, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), "Nenhum exame encontrado", 404);
		
		return ResponseEntity.status(404).body(erroDTO);
	}
	
	@ExceptionHandler(AgendamentoNotFoundException.class)
	public ResponseEntity<Object> handleAgendamentoNotFoundException(AgendamentoNotFoundException ex, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), "Nenhum agendamento encontrado", 404);
		
		return ResponseEntity.status(404).body(erroDTO);
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException ex, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), ex.getMessage(), 400);
		
		return ResponseEntity.status(400).body(erroDTO);
	}
	
	@ExceptionHandler(ConstraintViolationException.class)
	public ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException ex, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), ex.getConstraintName(), 400);
		
		return ResponseEntity.status(400).body(erroDTO);
	}
	
	@ExceptionHandler(javax.validation.ConstraintViolationException.class)
	public ResponseEntity<Object> handleConstraintViolationException(javax.validation.ConstraintViolationException ex, WebRequest request) {
		
		Map<String, Object> body = new LinkedHashMap<>();
		body.put("data", new Date());

		List<String> erros = ex.getConstraintViolations().stream().map(x -> x.getMessage()).collect(Collectors.toList());
		
		body.put("erros", erros);
		body.put("statusCode", 400);
		
		return ResponseEntity.status(400).body(body);
	}
	
	@Override
	protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers,
	        HttpStatus status, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), "Endpoint não cadastrado", 404);
		
		return ResponseEntity.status(404).body(erroDTO);
	}
}
