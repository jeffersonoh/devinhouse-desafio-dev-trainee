package br.com.softplan.desafio.devtrainee.service;

import br.com.softplan.desafio.devtrainee.dto.AgendamentoDTO;
import br.com.softplan.desafio.devtrainee.entity.Agendamento;
import br.com.softplan.desafio.devtrainee.entity.Cliente;
import br.com.softplan.desafio.devtrainee.entity.Exame;
import br.com.softplan.desafio.devtrainee.repository.AgendamentoRepository;
import br.com.softplan.desafio.devtrainee.repository.ClienteRepository;
import br.com.softplan.desafio.devtrainee.repository.ExameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AgendamentoService {

    @Autowired
    AgendamentoRepository agendamentoRepository;

    @Autowired
    ClienteRepository clienteRepository;

    @Autowired
    ExameRepository exameRepository;

    public List<Agendamento> getAgendamentos() {
        return agendamentoRepository.findAll();
    }
    
    public Agendamento getAgendamentoById(Long id) {
    	return agendamentoRepository.findById(id).get();
    }

    public void criarAgendamento(AgendamentoDTO agendamentoDTO) {

        Cliente cliente = clienteRepository.findById(agendamentoDTO.getCliente_id()).get();
        
        Exame exame = exameRepository.findById(agendamentoDTO.getExame_id()).get();
        
        Agendamento agendamento = new Agendamento(cliente, exame, agendamentoDTO.getDataEHoraDoAgendamento());
        
        agendamentoRepository.save(agendamento);
    }
    
    public Agendamento atualizarExame(Long id, LocalDateTime localDateTime) {
		Agendamento agendamentoAtual = agendamentoRepository.findById(id).get();
		agendamentoAtual.setDataEHoraDoAgendamento(localDateTime);;
		return agendamentoRepository.save(agendamentoAtual);
	}

	public void excluirAgendamento(Long id) {
		agendamentoRepository.deleteById(id);
		
	}
    
}
