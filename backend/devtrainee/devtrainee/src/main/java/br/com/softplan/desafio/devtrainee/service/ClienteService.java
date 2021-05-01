package br.com.softplan.desafio.devtrainee.service;

import br.com.softplan.desafio.devtrainee.entity.Cliente;
import br.com.softplan.desafio.devtrainee.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

	@Autowired
	ClienteRepository clienteRepository;

	public List<Cliente> getCliente() {
		return clienteRepository.findAll();
	}

	public Cliente getClienteById(Long id) {
		return clienteRepository.findById(id).get();
	}

	public Cliente getClienteByCPF(String cpf) {
		return clienteRepository.findClienteByCPF(cpf).get();
	}

	public void novoCliente(Cliente cliente) {
		Optional<Cliente> clienteByCPF = clienteRepository.findClienteByCPF(cliente.getCPF());
		if (clienteByCPF.isPresent()) {
			throw new IllegalStateException("CPF já cadastrado");
		}
		clienteRepository.save(cliente);
	}

	public Cliente atualizarCliente(Long id, Cliente cliente) {    
	
		Cliente attCliente = clienteRepository.findById(id).get();
		atualizar(cliente, attCliente);
		return clienteRepository.save(attCliente);
		
	}

	public void deletarCliente(Long id) {
		clienteRepository.deleteById(id);
	}
	
	private void atualizar(Cliente cliente, Cliente novoCliente) {
		if(novoCliente.getCPF() != null) {
			novoCliente.setCPF(cliente.getCPF());
		}
		if(novoCliente.getDataDeNascimento() != null) {
			novoCliente.setDataDeNascimento(cliente.getDataDeNascimento());
		}
		if(novoCliente.getNome() != null) {
			novoCliente.setNome(cliente.getNome());
		}
	}

}
