package br.com.devinhouse.spring.trabalhospringboot.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.spring.trabalhospringboot.dto.AgendaDTO;
import br.com.devinhouse.spring.trabalhospringboot.repository.AgendaRepository;

@Service
public class AgendaService {
    
    @Autowired
    private AgendaRepository repository;

    public List<AgendaDTO> listaDeTodaAgenda() {
        return repository.findAll();
    }

    public void cadastrarExameNaAgenda(AgendaDTO cadastroDeExame){
        if (validadorDeCadastro(cadastroDeExame)) {
            this.repository.save(cadastroDeExame);
            this.repository.flush();
        } else {
            throw new EntityNotFoundException("Não foi possivel cadastrar esse exame na agenda, já consta um cadastro igual em nosso sistema.");
        }
    }

    private Boolean validadorDeCadastro(AgendaDTO cadastroDeExame){
        List<AgendaDTO> agendaCadastrada = new ArrayList<AgendaDTO>();
        for (int x = 0; x < repository.count(); x++){
            agendaCadastrada.add(AgendaDTO.converter(this.repository.getOne(x+1)));
        }
        for (AgendaDTO examesDTO : agendaCadastrada) {
            if (examesDTO.getPacienteNome().intern() == cadastroDeExame.getPacienteNome().intern() && 
                examesDTO.getData().isEqual(cadastroDeExame.getData())) {return false;}
        }
        return true;
    }

    public void atualizarAgenda(AgendaDTO agendaAtualizar, Integer id){
        if (validadorDeExistencia(id)) {
            AgendaDTO agendaCadastrado = AgendaDTO.converter(this.repository.getOne(id));
            if (agendaAtualizar.getData() != null) {
                if (agendaAtualizar.getData() != agendaCadastrado.getData()) {
                    this.repository.getOne(id).setData(agendaAtualizar.getData());}}
            this.repository.flush();
        } else {
            throw new EntityNotFoundException("Não foi localizado uma marcação para esse paciente.");
        }
    }

    private Boolean validadorDeExistencia(Integer id){
        if (!this.repository.existsById(id)) {return false;}
        return true;
    }

    public void deletarAgenda(Integer id) {
        if (validadorDeExistencia(id)) {
            this.repository.deleteById(id);
            this.repository.flush();
        } else {
            throw new EntityNotFoundException("Não foi localizado uma marcação para esse paciente.");
        }
    }

    
}
