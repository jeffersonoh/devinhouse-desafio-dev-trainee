package br.com.devinhouse.spring.trabalhospringboot.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.spring.trabalhospringboot.dto.ExamesDTO;
import br.com.devinhouse.spring.trabalhospringboot.mock.ExamesMock;
import br.com.devinhouse.spring.trabalhospringboot.repository.ExamesRepository;

@Service
public class ExamesService {
    
    @Autowired
    private ExamesRepository repository;

    @Autowired
    private ExamesMock mock;

    public List<ExamesDTO> listaDeTodosExamesOfertados(){
        mock.cadastrarExamesNoRepository();
        return this.repository.findAll();
    }

}
