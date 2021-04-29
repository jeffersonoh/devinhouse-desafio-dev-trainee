package br.com.devinhouse.trainee.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.devinhouse.trainee.entities.Cliente;
import br.com.devinhouse.trainee.repositories.ClienteRepository;

@Service
public class ClienteServices {

	@Autowired
	private ClienteRepository clienteRepository;
	
	// Todos os clientes
	protected List<Cliente> findAllClients(){
		return clienteRepository.findAll();
	}
	
	// Validar quantidade de digitos do CPF
	protected boolean validateCPF(Long cpf) {
		boolean isValid = String.valueOf(cpf).length() == 11;
		
		return isValid;
	}
	
	// Localizar cliente atraves do CPF
	protected Cliente foundClientByCPF(Long cpf) {
		Cliente foundClient = new Cliente();
		List<Cliente> allClients = findAllClients();
		
		for(Cliente each : allClients) {
			if(cpf.equals(each.getCPF())) {
				foundClient = each;
			}
		}
		
		return foundClient;
	}
	
	// Cadastra cliente;
	public Cliente create(Cliente obj) {
		return clienteRepository.save(obj);
	}
	
	// Busca todos os clientes;
	public List<Cliente> getAll(){
		return findAllClients();
	}
	
	// Busca um cliente baseado no seu CPF
	public Cliente getByCPFKey(Long cpf) {
		return foundClientByCPF(cpf);
	}
		
	// Atualiza os atributos de um cliente baseado no seu CPF
	public Cliente updateClientByCPF(Long cpf, Cliente newObj) {
		Cliente filteredClient = foundClientByCPF(cpf);
		
		if (newObj.getNome() != null) {
			filteredClient.setNome(newObj.getNome());
		}
		if (newObj.getSobrenome() != null) {
			filteredClient.setSobrenome(newObj.getSobrenome());
		}
		if (newObj.getBirthYear() != null) {
			filteredClient.setBirthYear(newObj.getBirthYear());
		}
		
		return filteredClient;
	}

	// Remove um cliente baseado no seu CPF
	public List<Cliente> delete(Long cpf) {
		Cliente filteredClient = foundClientByCPF(cpf);
		clienteRepository.delete(filteredClient);
		
		return findAllClients();		
	}	
}
