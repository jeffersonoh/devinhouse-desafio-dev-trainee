package br.com.softplan.desafiotreinee.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.softplan.desafiotreinee.dto.AgendaDTO;
import br.com.softplan.desafiotreinee.dto.ClienteDTO;
import br.com.softplan.desafiotreinee.mock.AgendaMock;

@Repository
public class AgendaRepository {
	
	@Autowired
	private AgendaMock agendaMock;
	
	public List<AgendaDTO> findAllAgenda(){
		return agendaMock.getAllAgendas();
	}
	
	public List<AgendaDTO> editarAgendamento(ClienteDTO cpf, AgendaDTO newAgenda){
		List<AgendaDTO> todosAgendamentos = findAllAgenda();
		
		for (AgendaDTO agendaDTO : todosAgendamentos) {
			
			if (cpf == agendaDTO.getCliente()) {
				if (agendaDTO.getDia() != null){
					agendaDTO.setDia(newAgenda.getDia());
				}
				if (agendaDTO.getHora() != null) {
					agendaDTO.setHora(newAgenda.getHora());
				}
				if (agendaDTO.getMin() != null) {
					agendaDTO.setMin(newAgenda.getMin());
				}
			}
		}
		return todosAgendamentos;
	}

}
