package br.com.softplan.desafiotreinee.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import br.com.softplan.desafiotreinee.dto.AgendaDTO;
import br.com.softplan.desafiotreinee.dto.ClienteDTO;
import br.com.softplan.desafiotreinee.dto.ExameDTO;

@Component
public class AgendaMock {

	//AgendaDTO dto1 = new AgendaDTO(1,10,5,2021,11,30,,1);
	
	
	public List<AgendaDTO> getAllAgendas(){
		List<AgendaDTO> listAgendas = new ArrayList<AgendaDTO>();
		
		return listAgendas;
	}
}

/*
this.id = id;
this.dia = dia;
this.mes = mes;
this.ano = ano;
this.hora = hora;
this.min = min;
this.cliente = cliente;
this.exame = exame;

private int id;
	private Integer dia;
	private Integer mes;
	private Integer ano;
	private Integer hora;
	private Integer min;
	private ClienteDTO cliente;
	private ExameDTO exame;
*/