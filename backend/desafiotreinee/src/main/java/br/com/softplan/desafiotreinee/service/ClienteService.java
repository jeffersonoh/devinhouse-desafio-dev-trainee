package br.com.softplan.desafiotreinee.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.softplan.desafiotreinee.dto.ClienteDTO;
import br.com.softplan.desafiotreinee.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;

	private List<ClienteDTO> recuperarTodosClientes() {
		return repository.findAllClientes();
	}

	// Deverá haver um endpoint para listagem de todos os clientes cadastrados;
	public List<ClienteDTO> recuperarClientesMocados() {
		return recuperarTodosClientes();
	}

	// Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
	public List<ClienteDTO> recuperarClientesMocados(String cpf) {
		List<ClienteDTO> todosClientes = recuperarTodosClientes();
		List<ClienteDTO> listClienteFiltrado = new ArrayList<ClienteDTO>();

		for (ClienteDTO clienteDTO : todosClientes) {
			if (cpf.equals(clienteDTO.getCpf())) {
				listClienteFiltrado.add(clienteDTO);
			}
		}

		return listClienteFiltrado;
	}

	// Deverá haver um endpoint para criação de um cliente;
	public List<ClienteDTO> cadastrarCliente(ClienteDTO cliente) {
		List<ClienteDTO> todosClientes = recuperarTodosClientes();
		
		todosClientes.add(cliente);

		for (ClienteDTO clienteDTO : todosClientes) {

			if (cliente.getCpf().equals(clienteDTO.getCpf())) {
				System.out.println("CPF já cadastrado!!");
				todosClientes.remove(cliente);
				return todosClientes;

			}else {
				return todosClientes;
			}

		}
		return todosClientes;
	}

	// Deverá haver um endpoint para atualização de um cliente;
	public List<ClienteDTO> atualizarCliente(String cpf, ClienteDTO newCliente) {
		List<ClienteDTO> todosClientes = recuperarTodosClientes();

		for (ClienteDTO clienteDTO : todosClientes) {
			if (cpf.equals(clienteDTO.getCpf())) {
				if (clienteDTO.getCpf() != null) {
					clienteDTO.setCpf(newCliente.getCpf());
				}
				if (clienteDTO.getNome() != null) {
					clienteDTO.setNome(newCliente.getNome());
				}
				if (clienteDTO.getSobrenome() != null) {
					clienteDTO.setSobrenome(newCliente.getSobrenome());
				}
				if (clienteDTO.getDataNascimento() != null) {
					clienteDTO.setDataNascimento(newCliente.getDataNascimento());
				}
			}
		}

		return todosClientes;

		/*
		 * if(todosClientes.size() != 0) { int id = todosClientes.size(); id += 1;
		 * newCliente.setId(id); for(ClienteDTO clienteDTO : todosClientes) {
		 * if(newCliente.getCpf() != clienteDTO.getCpf()) {
		 * 
		 * 
		 * } } todosClientes.add(newCliente); }
		 * 
		 * return todosClientes;
		 */
	}

	// Deverá haver um endpoint para exclusão de um cliente;
	public List<ClienteDTO> apagarCliente(String cpf) {
		List<ClienteDTO> todosClientes = recuperarTodosClientes();

		
		for (int i = 0; i < todosClientes.size(); i++) {
			if (cpf.equals(todosClientes.get(i).getCpf())) {
				todosClientes.remove(i);
			}
		}

		return todosClientes;
	}

}
/*
 * Deverá haver um endpoint para criação de um cliente; Deverá haver um endpoint
 * para atualização de um cliente; ->Deverá haver um endpoint para exclusão de
 * um cliente; ->Deverá haver um endpoint para busca de um cliente baseado no
 * seu cpf; ->Deverá haver um endpoint para listagem de todos os clientes
 * cadastrados;
 */