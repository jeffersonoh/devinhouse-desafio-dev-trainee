package br.com.devinhouse.spring.trabalhospringboot.service.exceptions;

/**
 * EntityNotFoundException
 */
public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException(String mensagem) {
        super(mensagem);
    }
    
}