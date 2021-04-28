package br.com.devinhouse.spring.trabalhospringboot.service.exceptions;

public class MethodNotFoundException extends RuntimeException {

    public MethodNotFoundException (String mensagem){
        super(mensagem);
    }
    
}
