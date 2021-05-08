package br.com.devtrainee.springboot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.devtrainee.springboot.dto.AgendamentoDTO;
import br.com.devtrainee.springboot.mock.AgendamentoMock;

@Repository
public class AgendamentoRepository {

	@Autowired
	private AgendamentoMock agendamentoMock;
	
	public List<AgendamentoDTO> listar() {
		return agendamentoMock.obterMock();
	}
	
	public AgendamentoDTO carregar(Integer id) {
		List<AgendamentoDTO> todosOsAgendamentos = agendamentoMock.obterMock();
		for (AgendamentoDTO agendamento : todosOsAgendamentos) {  
			if (agendamento.getId().equals(id)) { 
				return agendamento;
			}
		}
		return null;
	}

	public void criar(AgendamentoDTO agendamento) {
		List<AgendamentoDTO> todosOsAgendamentos = agendamentoMock.obterMock();
		todosOsAgendamentos.add(agendamento);
	}

}
