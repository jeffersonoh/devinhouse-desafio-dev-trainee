package br.com.softplan.desafiotreinee.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.softplan.desafiotreinee.dto.ExameDTO;
import br.com.softplan.desafiotreinee.mock.DadosMock;

@Repository
public class ExameRepository {

	@Autowired
	private DadosMock exameMock;

	public List<ExameDTO> findAllExames() {
		return exameMock.getAllExames();
	}

}