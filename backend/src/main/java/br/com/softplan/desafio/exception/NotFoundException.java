package br.com.softplan.desafio.exception;

import java.util.NoSuchElementException;

public class NotFoundException extends NoSuchElementException {

    public NotFoundException(String s) {
        super(s);
    }

}
