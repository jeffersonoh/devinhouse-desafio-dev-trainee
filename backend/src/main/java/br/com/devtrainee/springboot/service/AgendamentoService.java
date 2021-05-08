package br.com.devtrainee.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devtrainee.springboot.dto.AgendamentoDTO;
import br.com.devtrainee.springboot.repository.AgendamentoRepository;

@Service
public class AgendamentoService {
	
	@Autowired
	private AgendamentoRepository agendamentoRepository;

	public List<AgendamentoDTO> listar() {
		return agendamentoRepository.listar();
	}
	
	public AgendamentoDTO alterarAgendamento(Integer id, AgendamentoDTO novoAgendamentoDTO) {
		AgendamentoDTO agendamento = agendamentoRepository.carregar(id);
		agendamento.setDataHora(novoAgendamentoDTO.getDataHora());
		return agendamento;
	}


	public AgendamentoDTO criarAgendamento(AgendamentoDTO agendamento) {
		agendamentoRepository.criar(agendamento);
				
		return agendamento;
	}

	public void deletar(Integer id) { //boolean true / false 
		List<AgendamentoDTO> todosOsAgendamentos = listar();
	
		for (AgendamentoDTO agendamento : todosOsAgendamentos) {
			if (id.equals(agendamento.getId())) {
				todosOsAgendamentos.remove(agendamento);
				return;
			}
		}
	
	}

	
}
