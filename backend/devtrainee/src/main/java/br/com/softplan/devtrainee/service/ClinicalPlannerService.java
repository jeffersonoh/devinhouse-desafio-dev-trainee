package br.com.softplan.devtrainee.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.softplan.devtrainee.dto.ClientDto;
import br.com.softplan.devtrainee.entity.ClientEntity;
import br.com.softplan.devtrainee.repository.ClientRepository;

@Service
public class ClinicalPlannerService {
	@Autowired
	private ClientRepository repository;

	public ClientEntity registerClient(ClientEntity client) {
		return repository.save(client);
	}

	public List<ClientEntity> findAllClients() {
//		List<Processo> processos = new ArrayList<Processo>();
//		Iterable<Processo> result = repository.findAll();
//		
//		result.forEach(processos::add);
		List<ClientEntity> clients = new ArrayList<ClientEntity>();
		Iterable<ClientEntity> allClients = repository.findAll();
		allClients.forEach(clients::add);//colocar for normal
		
		return clients;
	}
	
	public List<ClientDto> findClientsByCpf(String cpf) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<ClientDto> deleteClient(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	public ClientDto updateClient(String cpf, ClientDto newClient) {
		// TODO Auto-generated method stub
		return null;
	}


}
