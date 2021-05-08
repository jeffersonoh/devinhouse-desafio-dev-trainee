package br.com.devtrainee.springboot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.devtrainee.springboot.dto.ExamesDTO;
import br.com.devtrainee.springboot.mock.ExamesMock;

@Repository

public class ExamesRepository {
	
	@Autowired
	private ExamesMock examesMock;
	
	public List<ExamesDTO> listarExames() {
		return examesMock.criarMock();
	}

}
