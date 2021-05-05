package br.com.devinhouse.thiago_mathias_simon.service;

import br.com.devinhouse.thiago_mathias_simon.entity.ExameEntity;
import br.com.devinhouse.thiago_mathias_simon.repository.ExameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExameService {

    @Autowired
    private ExameRepository repository;

    public Iterable<ExameEntity> listarExames() {
        return  repository.findAll();
    }
}
