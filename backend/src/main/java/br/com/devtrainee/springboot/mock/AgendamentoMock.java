package br.com.devtrainee.springboot.mock;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import br.com.devtrainee.springboot.dto.AgendamentoDTO;
import br.com.devtrainee.springboot.dto.ClienteDTO;
import br.com.devtrainee.springboot.dto.ExamesDTO;

@Component
public class AgendamentoMock {

	public AgendamentoMock() { 
		if (agendamentos == null) 
			agendamentos = new ArrayList<AgendamentoDTO>();
	}

	private static List<AgendamentoDTO> agendamentos;
	
	
	@Autowired
	private ExamesMock exameMock;
	
	@Autowired
	private ClienteMock clienteMock;

	public List<AgendamentoDTO> obterMock() {
		if (agendamentos.isEmpty() == false)
			return agendamentos;
		
		List<ExamesDTO> exames = exameMock.criarMock();
		List<ClienteDTO> clientes = clienteMock.criarMock();

		for (int i = 0; i < 10; i++) { 
			AgendamentoDTO dto = new AgendamentoDTO();
			dto.setId(i+1);
			dto.setDataHora(criarDataRandomica());
			dto.setExame(exames.get(randBetween(0,exames.size() - 1)));
			dto.setCliente(clientes.get(randBetween(0, clientes.size() - 1)));
			agendamentos.add(dto);
		}				
 		return agendamentos;
	}

	private Calendar criarDataRandomica() {
		Calendar calendario = new GregorianCalendar();
		calendario.set(Calendar.YEAR,  randBetween(2021,2023));
		calendario.set(Calendar.DAY_OF_YEAR, randBetween(1,calendario.getActualMaximum(Calendar.DAY_OF_YEAR)));
		calendario.set(Calendar.HOUR_OF_DAY, randBetween(8,18));
		calendario.set(Calendar.MINUTE, randBetween(0,59));
				
		return calendario;
	}
	
	private int randBetween(int start, int end) {
        return start + (int)Math.round(Math.random() * (end - start));
    }
	
}
