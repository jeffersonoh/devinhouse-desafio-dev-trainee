package br.com.softplan.desafio.exception;

import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public class ExceptionResponse {
    private final LocalDateTime timestamp;
    private final int status;
    private final String error;
    private final String message;
    private final String path;

    public ExceptionResponse(LocalDateTime timestamp, HttpStatus httpStatus, String message, String path) {
        super();
        this.timestamp = timestamp;
        this.status = httpStatus.value();
        this.error = httpStatus.getReasonPhrase().toUpperCase();
        this.message = message;
        this.path = path;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public int getStatus() {
        return status;
    }

    public String getError() {
        return error;
    }

    public String getMessage() {
        return message;
    }

    public String getPath() {
        return path;
    }

}
