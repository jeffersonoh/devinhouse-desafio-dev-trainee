package br.com.devinhouse.spring.trabalhospringboot.resource.exceptions;

import java.util.Date;

import lombok.Data;

@Data
public class ErrorMessage {
    
    private Date data;
    private String mensagem;

    public ErrorMessage(Date data, String mensagem) {
        this.data = data;
        this.mensagem = mensagem;
    }
    
}
