package br.com.devtrainee.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devtrainee.springboot.dto.ClienteDTO;
import br.com.devtrainee.springboot.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;
	
	public List<ClienteDTO> listar() {
		return clienteRepository.listar();
	}
	
	public ClienteDTO pegaPorCpf(String cpf) {
		List<ClienteDTO> todosOsCliente = listar();
		for (ClienteDTO cliente : todosOsCliente ) {
			if (cliente.getCPF().equals(cpf)) {
				return cliente;
			}
		}
		
		return null ;
	}

	public ClienteDTO criar(ClienteDTO cliente) {
		if (pegaPorCpf(cliente.getCPF()) != null)
			return null;
		
		clienteRepository.criar(cliente);
		return cliente;
	}

	public ClienteDTO alterar(Integer id, ClienteDTO clienteDTO) {
		ClienteDTO cliente = clienteRepository.carregar(id);
		cliente.setDataDeNascimento(clienteDTO.getDataNascimento());
		return cliente;
	}

	public void deletar(Integer id) {
		List<ClienteDTO> todosOsClientes = listar();
		for (ClienteDTO cliente : todosOsClientes) {
			if (id.equals(cliente.getId())) {
				todosOsClientes.remove(cliente);
				return;
			}
		}
		
	}

	

}
