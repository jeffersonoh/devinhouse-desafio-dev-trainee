package br.com.devtrainee.springboot.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import br.com.devtrainee.springboot.dto.ClienteDTO;
import br.com.devtrainee.springboot.mock.ClienteMock;

@Repository
public class ClienteRepository {

	@Autowired
	private ClienteMock clienteMock;	
	
	public List<ClienteDTO> listar() {
		return clienteMock.criarMock();
	}

	public void criar(ClienteDTO cliente) {
		List<ClienteDTO> todosOsClientes = clienteMock.criarMock();
		todosOsClientes.add(cliente);		
	}

	public ClienteDTO carregar(Integer id) {
		List<ClienteDTO> todosOsClientes = clienteMock.criarMock();
		for (ClienteDTO cliente : todosOsClientes) {
			if (cliente.getId().equals(id)) {
				return cliente;
			}
		}
		return null;
	}

}
