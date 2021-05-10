package com.sistemadeagendamento.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistemadeagendamento.exception.ClienteException;
import com.sistemadeagendamento.model.Cliente;
import com.sistemadeagendamento.repository.ClientesRepository;

@Service
public class ClienteService {
	
@Autowired
public ClientesRepository clientesRepository;
	
	public Cliente criarCliente (Cliente cliente) {
		
		try {
			Cliente clienteEncontrado = clientesRepository.save(cliente);
			return clienteEncontrado;
		}
		catch(Exception e){
			System.out.println("CPF já cadastrado!");
			return null;
		}

	}
	

	public Optional<Cliente> editarCliente (String cpf, Cliente cliente) {
		Optional<Cliente> clienteEncontrado = clientesRepository.findByCpf(cpf);
		
		clienteEncontrado.ifPresentOrElse(c -> {
			if (cliente.getNome() != null) {
				c.setNome(cliente.getNome());
				clientesRepository.save(c);
			}
			if (cliente.getCpf() != null) {
				c.setCpf(cliente.getCpf());
				clientesRepository.save(c);
			}
			if (cliente.getDataDeNascimento() != null) {
				c.setDataDeNascimento(cliente.getDataDeNascimento());
				clientesRepository.save(c);
			}
		}, () -> { throw new ClienteException("Cliente não encontrado!"); });
		
		return null;
	}


	public void deletarCliente(String cpf) {
		Optional <Cliente> clienteEncontrado = clientesRepository.findByCpf(cpf);
		
		clienteEncontrado.ifPresentOrElse(c -> {
			clientesRepository.delete(c);
		}, () -> { throw new ClienteException("Cliente não encontrado!"); });
		
	}
}
