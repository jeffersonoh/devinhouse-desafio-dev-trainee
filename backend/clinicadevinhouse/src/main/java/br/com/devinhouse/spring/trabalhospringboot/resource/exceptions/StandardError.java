package br.com.devinhouse.spring.trabalhospringboot.resource.exceptions;

import java.io.Serializable;
import java.time.Instant;

import lombok.Data;

@Data
public class StandardError implements Serializable {
    
    private Instant timestamp;
    private Integer status;
    private String error;
    private String message;
    private String path;
}
