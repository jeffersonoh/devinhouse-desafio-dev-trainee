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

	public List<ClienteDTO> recuperarClientesMocados() {
		return recuperarTodosClientes();
	}

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

	public List<ClienteDTO> recuperarClientesId(Integer id) {
		List<ClienteDTO> todosClientes = recuperarTodosClientes();
		List<ClienteDTO> listClienteFiltrado = new ArrayList<ClienteDTO>();

		for (ClienteDTO clienteDTO : todosClientes) {
			if (id == clienteDTO.getId()) {
				listClienteFiltrado.add(clienteDTO);
			}
		}

		return listClienteFiltrado;
	}

	public List<ClienteDTO> cadastrarCliente(ClienteDTO cliente) {
		List<ClienteDTO> todosClientes = recuperarTodosClientes();

		if (todosClientes.size() != 0) {
			int id = todosClientes.size();
			id += 1;
			cliente.setId(id);

			todosClientes.add(cliente);
		}

		for (ClienteDTO clienteDTO : todosClientes) {

			if (cliente.getCpf().equals(clienteDTO.getCpf())) {
				System.out.println("CPF já cadastrado!!");
				todosClientes.remove(cliente);
				return todosClientes;

			} else {
				return todosClientes;
			}

		}
		return todosClientes;
	}

	public ClienteDTO atualizarCliente(String cpf, ClienteDTO newCliente) {
		List<ClienteDTO> todosClientes = recuperarTodosClientes();
		ClienteDTO clienteAtualizado = null;

		for (int i = 0; i < todosClientes.size(); i++) {
			if (cpf.equals(todosClientes.get(i).getCpf())) {
				if (todosClientes.get(i).getCpf() != null) {
					todosClientes.get(i).setCpf(newCliente.getCpf());
				}
				if (todosClientes.get(i).getNome() != null) {
					todosClientes.get(i).setNome(newCliente.getNome());
				}
				if (todosClientes.get(i).getSobrenome() != null) {
					todosClientes.get(i).setSobrenome(newCliente.getSobrenome());
				}
				if (todosClientes.get(i).getDataNascimento() != null) {
					todosClientes.get(i).setDataNascimento(newCliente.getDataNascimento());
				}

				clienteAtualizado = todosClientes.get(i);

			}
		}

		return clienteAtualizado;
	}

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