package br.com.softplan.desafio.service;

import br.com.softplan.desafio.entity.Exame;
import br.com.softplan.desafio.repository.ExameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExameService {

    @Autowired
    private ExameRepository exameRepository;

    public List<Exame> buscarTodos() {

        return exameRepository.findAll();
    }

}
