package br.com.softplan.desafiotreinee.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.softplan.desafiotreinee.dto.AgendaDTO;
import br.com.softplan.desafiotreinee.mock.DadosMock;

@Repository
public class AgendaRepository {

	@Autowired
	private DadosMock agendaMock;

	public List<AgendaDTO> findAllAgenda() {
		return agendaMock.getAllAgendas();
	}

}