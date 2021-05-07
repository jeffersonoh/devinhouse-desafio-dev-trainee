package br.com.softplan.desafiotreinee.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.softplan.desafiotreinee.dto.ClienteDTO;
import br.com.softplan.desafiotreinee.mock.DadosMock;

@Repository
public class ClienteRepository {

	@Autowired
	private DadosMock clienteMock;

	public List<ClienteDTO> findAllClientes() {
		return clienteMock.getAllClientes();
	}

}