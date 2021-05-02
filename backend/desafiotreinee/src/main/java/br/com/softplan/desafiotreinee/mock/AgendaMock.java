package br.com.softplan.desafiotreinee.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.softplan.desafiotreinee.dto.AgendaDTO;

@Component
public class AgendaMock {

	public List<AgendaDTO> getAllAgendas(){
		List<AgendaDTO> listAgendas = new ArrayList<AgendaDTO>();
		
		return listAgendas;
	}
}
