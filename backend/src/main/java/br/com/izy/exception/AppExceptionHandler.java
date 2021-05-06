package br.com.izy.exception;

import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
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
		
		ErroDTO erroDTO = new ErroDTO(new Date(), ex.getMessage(), 404);
		
		return ResponseEntity.status(404).body(erroDTO);
	}
	
	@ExceptionHandler(ExameNotFoundException.class)
	public ResponseEntity<Object> handleExameNotFoundException(ExameNotFoundException ex, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), ex.getMessage(), 404);
		
		return ResponseEntity.status(404).body(erroDTO);
	}
	
	@ExceptionHandler(AgendamentoNotFoundException.class)
	public ResponseEntity<Object> handleAgendamentoNotFoundException(AgendamentoNotFoundException ex, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), ex.getMessage(), 404);
		
		return ResponseEntity.status(404).body(erroDTO);
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException ex, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), ex.getMessage(), 400);
		
		return ResponseEntity.status(400).body(erroDTO);
	}
	
	@Autowired
	private MessageSource messageSource;

	
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, 
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		ErroDTO erroDTO = new ErroDTO(new Date(), "Um ou mais campos estão incorretos. Corrija e tente novamente", 400);

		new Locale("pt-BR");
		
		List<ErroDTO.Campo> campos = ex.getBindingResult().getAllErrors()
				.stream()
				.map(e -> new ErroDTO.Campo(((FieldError) e).getField(),
						messageSource.getMessage(e, LocaleContextHolder.getLocale()))
				)
				.collect(Collectors.toList());

		erroDTO.setCampos(campos);

		return super.handleExceptionInternal(ex, erroDTO, headers, status, request);
	}

	
	@Override
	protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers,
	        HttpStatus status, WebRequest request) {
		
		ErroDTO erroDTO = new ErroDTO(new Date(), "Endpoint não cadastrado", 404);
		
		return ResponseEntity.status(404).body(erroDTO);
	}
}
