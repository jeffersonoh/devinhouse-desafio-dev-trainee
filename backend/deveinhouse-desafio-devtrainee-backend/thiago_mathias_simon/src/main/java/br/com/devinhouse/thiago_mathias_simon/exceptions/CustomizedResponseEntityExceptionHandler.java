package br.com.devinhouse.thiago_mathias_simon.exceptions;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;

import java.util.NoSuchElementException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import br.com.devinhouse.thiago_mathias_simon.ErrorDTO.ExceptionResponse;

@RestControllerAdvice
@ControllerAdvice
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(value = { ProcessAlreadyExistException.class })
	public final ResponseEntity<Object> handleExceptionEntity(ProcessAlreadyExistException paee, WebRequest request)
			throws Exception {

		ExceptionResponse exceptionResponse = new ExceptionResponse(paee.getMessage(),
				request.getDescription(false), BAD_REQUEST.getReasonPhrase());

		return new ResponseEntity<Object>(exceptionResponse, BAD_REQUEST);

	}

	@ExceptionHandler(value = { NullProcessException.class })
	public final ResponseEntity<Object> handleExceptionEntity(NullProcessException npe, WebRequest request)
			throws Exception {

		ExceptionResponse exceptionResponse = new ExceptionResponse(npe.getMessage(),
				request.getDescription(false), BAD_REQUEST.getReasonPhrase());

		return new ResponseEntity<Object>(exceptionResponse, BAD_REQUEST);

	}

	@ExceptionHandler(value = { NoSuchElementException.class })
	public final ResponseEntity<Object> handleExceptionEntity(NoSuchElementException nsee, WebRequest request)
			throws Exception {

		ExceptionResponse exceptionResponse = new ExceptionResponse("O processo pelo qual buscavas não foi encontrado!",
				request.getDescription(false), NOT_FOUND.getReasonPhrase());

		return new ResponseEntity<Object>(exceptionResponse, NOT_FOUND);

	}

	@ExceptionHandler(value = { PatientNotFoundException.class })
	public final ResponseEntity<Object> handleExceptionEntity(PatientNotFoundException pnfe, WebRequest request)
			throws Exception {

		ExceptionResponse exceptionResponse = new ExceptionResponse(pnfe.getMessage(),
				request.getDescription(false), NOT_FOUND.getReasonPhrase());

		return new ResponseEntity<Object>(exceptionResponse, NOT_FOUND);

	}

	@ExceptionHandler(value = {CpfAlreadyExistException.class})
	public final ResponseEntity<Object> handleExceptionEntity(CpfAlreadyExistException caee, WebRequest request)
			throws Exception {

		ExceptionResponse exceptionResponse = new ExceptionResponse(caee.getMessage(),
				request.getDescription(false), BAD_REQUEST.getReasonPhrase());

		return new ResponseEntity<Object>(exceptionResponse, BAD_REQUEST);

	}

	@ExceptionHandler(value = {InvallidCpfException.class})
	public final ResponseEntity<Object> handleExceptionEntity(InvallidCpfException ice, WebRequest request)
			throws Exception {

		ExceptionResponse exceptionResponse = new ExceptionResponse(ice.getMessage(),
				request.getDescription(false), BAD_REQUEST.getReasonPhrase());

		return new ResponseEntity<Object>(exceptionResponse, BAD_REQUEST);

	}

	@ExceptionHandler(value = {CpfNotFoundException.class})
	public final ResponseEntity<Object> handleExceptionEntity(CpfNotFoundException cnfe, WebRequest request)
			throws Exception {

		ExceptionResponse exceptionResponse = new ExceptionResponse(cnfe.getMessage(),
				request.getDescription(false), NOT_FOUND.getReasonPhrase());

		return new ResponseEntity<Object>(exceptionResponse, NOT_FOUND);

	}

	@ExceptionHandler(value = {IncompatibleDataException.class})
	public final ResponseEntity<Object> handleExceptionEntity(IncompatibleDataException ide, WebRequest request)
			throws Exception {

		ExceptionResponse exceptionResponse = new ExceptionResponse(ide.getMessage(),
				request.getDescription(false), BAD_REQUEST.getReasonPhrase());

		return new ResponseEntity<Object>(exceptionResponse, BAD_REQUEST);

	}
}