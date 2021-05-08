package br.com.softplan.desafio.exception;

import org.springframework.dao.DataIntegrityViolationException;

public class CpfExistente extends DataIntegrityViolationException {

    public CpfExistente(String msg) {
        super(msg);
    }

}

