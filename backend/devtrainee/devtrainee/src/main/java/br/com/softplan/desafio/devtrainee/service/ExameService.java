package br.com.softplan.desafio.devtrainee.service;

import br.com.softplan.desafio.devtrainee.entity.Exame;
import br.com.softplan.desafio.devtrainee.repository.ExameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExameService {

    @Autowired
    ExameRepository exameRepository;

    public List<Exame> getExames() {
        return exameRepository.findAll();
    }


}
